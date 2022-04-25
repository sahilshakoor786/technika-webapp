const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const utils = require("../lib/utils");
const User = require("../model/user");
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.getUrl = async (req, res, _) => {
  try {
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
      redirect_uri: `${process.env.SERVER_ROOT_URI}/auth/google/callback`,
      client_id: process.env.GOOGLE_CLIENT_ID,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };

    const params = new URLSearchParams(options);

    const url = `${rootUrl}?${params.toString()}`;

    res.status(200).json({ url });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.googleCallback = async (req, res, _) => {
  try {
    const code = req.query.code;

    const url = "https://oauth2.googleapis.com/token";
    const values = {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.SERVER_ROOT_URI}/auth/google/callback`,
      grant_type: "authorization_code",
    };

    const params = new URLSearchParams(values);

    const { id_token, access_token, refresh_token } = await axios
      .post(url, params.toString(), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        console.error(`Failed to fetch auth tokens`);
        throw new Error(error.message);
      });

    const googleUser = await axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${id_token}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((error) => {
        console.error(`Failed to fetch user`);
        throw new Error(error.message);
      });

    const token = jwt.sign(googleUser, process.env.JWT_SECRET);

    const email = googleUser.email;

    let nextId = await utils.getNextSequence("userid");
    if (nextId === null) {
      console.error(`Failed to get next user id`);
    }
    let id = "0000" + nextId.toString();

    const tscId = "TSC22" + id.slice(nextId.toString().length - 1);

    const user = new User({
      tscId: tscId,
      email,
      name: googleUser.name,
      isHbtuStudent: true,
      isTSCTeamMember: false,
      isTSCAdmin: false,
      picture: googleUser.picture,
      googleId: googleUser.id,
    });

    if (email.split("@")[1] === "hbtu.ac.in") {
      user.isHbtuStudent = true;
    } else {
      user.isHbtuStudent = false;
      user.college = "";
      user.city = "";
    }

    await user.save();

    res.status(200).json({
      token,
      user: {
        tscId,
        email,
        name: googleUser.name,
        picture: googleUser.picture,

        isHbtuStudent: user.isHbtuStudent,
        isTSCTeamMember: user.isTSCAdmin,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
