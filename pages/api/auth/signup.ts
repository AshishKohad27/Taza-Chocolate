import { TAuth, TObjectAuth } from "@/constants/auth";
import { postSignup } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Signup(
  req: NextApiRequest,
  res: NextApiResponse<TAuth>
) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;
    const { message, flag, data, desc } = await postSignup({
      name,
      email,
      password,
    });
    if (flag) {
      return res.status(201).send({ message, data, desc });
    } else {
      return res.status(401).send({ message, data, desc });
    }
  }
}
