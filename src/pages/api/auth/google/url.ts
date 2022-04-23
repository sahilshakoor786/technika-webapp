import { NextApiRequest, NextApiResponse } from "next";
import querystring from "querystring";

import { connectToDatabase } from "src/lib/mongodb";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: `${process.env.SERVER_ROOT_URI}/api/auth/google/callback`,
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
};
