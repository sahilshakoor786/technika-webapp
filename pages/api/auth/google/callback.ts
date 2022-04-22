// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

const querystring = require("querystring");
const axios = require("axios").default;

const jwt = require("jsonwebtoken");

export default async function handler({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  const code = req.query.code;

  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code,
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uri: `${process.env.SERVER_ROOT_URI}/api/auth/google/callback`,
    grant_type: "authorization_code",
  };

  const { id_token, access_token, refresh_token } = await axios
    .post(url, querystring.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res: any) => res.data)
    .catch((error: any) => {
      console.error(`Failed to fetch auth tokens`);
      throw new Error(error.message); // NOTE: This halts the execution
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
      throw new Error(error.message); // NOTE: This halts the execution
    });

  const token = jwt.sign(googleUser, "ksksks");

  res.status(200).json({
    user: googleUser,
    token,
    id_token,
    access_token,
    refresh_token,
  });
}
