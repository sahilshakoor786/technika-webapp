// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import next, { NextApiRequest, NextApiResponse } from "next";

const querystring = require("querystring");
const axios = require("axios").default;

const jwt = require("jsonwebtoken");

import { connectToDatabase } from "src/lib/mongodb";
import User from "src/model/user";

import { getNextSequence } from "src/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDatabase();
  const code = req.query.code;

  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.SERVER_ROOT_URI}/api/auth/google/callback`,
    grant_type: "authorization_code",
  };

  const params = new URLSearchParams(values);

  const { id_token, access_token, refresh_token } = await axios
    .post(url, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res: any) => res.data)
    .catch((error: any) => {
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
    .then((res: any) => res.data)
    .catch((error: any) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  const token = jwt.sign(googleUser, process.env.JWT_SECRET);

  const email = googleUser.email;

  let nextId = await getNextSequence("userid");
  if (nextId === null) {
    console.error(`Failed to get next user id`);
  }
  let id = "0000" + nextId.toString();

  id = id.slice(nextId.toString().length - 1);

  const user = new User({
    tscId: "TSC22" + id,
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
    user: googleUser,
    token,
    id_token,
    access_token,
    refresh_token,
  });
};
