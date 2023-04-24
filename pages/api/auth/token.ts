import { TAuthSignup } from "@/constants/auth";
import { postSignup, tokenVerify } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Signup(
  req: NextApiRequest,
  res: NextApiResponse<TAuthSignup>
) {
  if (req.method === "POST") {
    const { access_token } = req.body;
    console.log("access_token Payload:", access_token)
    const { message, flag, data, desc }: TAuthSignup = await tokenVerify(access_token);
    if (flag) {
      return res.status(201).send({ message, data, desc });
    } else {
      return res.status(401).send({ message, data, desc });
    }
  }
}
