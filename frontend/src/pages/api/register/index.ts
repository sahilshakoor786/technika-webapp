import { NextApiRequest, NextApiResponse } from "next";
import { axiosInstance } from "src/utils/axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const r = await axiosInstance.get("/auth/google/url");
    res.redirect(r.data.url);
  } catch (error) {
    console.error(error);
    res.redirect("/error");
  }
}
