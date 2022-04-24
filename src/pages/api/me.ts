import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "backend/lib/session";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);
  res.status(200).json(session.user);
};
