const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const utils = require("../lib/utils");
const User = require("../model/user");
const express = require("express");

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
    const code = req.body.code;

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
        console.error(`Failed to fetch auth tokens`, 300, error);
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
        console.error(`Failed to fetch user`, 300, error);
        throw new Error(error.message);
      });

    let user = await User.findOne({ googleId: googleUser.id });

    if (!user) {
      const email = googleUser.email;

      let nextId = await utils.getNextSequence("userid");
      if (nextId === null) {
        console.error(`Failed to get next user id`);
      }
      let id = "0000" + nextId.toString();

      const tscId = "TSC22" + id.slice(nextId.toString().length - 1);

      user = new User({
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
      } else if (email.split("@")[1] === "technika.org.in") {
        user.isHbtuStudent = true;
        user.isTSCTeamMember = true;
      } else if (email == "shubham@technika.org.in") {
        user.isHbtuStudent = true;
        user.isTSCTeamMember = true;
        user.isTSCAdmin = true;
      } else {
        user.tscId = ""; // for non-hbtu students and non-tsc team members generate tsc id after payment
        user.isHbtuStudent = false;
        user.college = "";
        user.city = "";
      }

      await user.save();
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "40d",
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      token,
      id: user._id,
      tscId: user.tscId,
      user: {
        id: user._id,
        tscId: user.tscId,
        name: user.name,
        email: user.email,
        isHbtuStudent: user.isHbtuStudent,
        isTSCTeamMember: user.isTSCTeamMember,
        isTSCAdmin: user.isTSCAdmin,
        picture: user.picture,

        college: user.college,
        city: user.city,
        phone: user.phone,
        batch: user.batch,
        branch: user.branch,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
