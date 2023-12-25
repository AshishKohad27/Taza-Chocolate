import { TAuthSignup } from "@/constants/auth";
import { postSignup } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Signup(
  req: NextApiRequest,
  res: NextApiResponse<TAuthSignup>
) {
  if (req.method === "POST") {
    const { email, password, first_name, last_name } = req.body;
    const { message, flag, data, desc }: TAuthSignup = await postSignup({
      first_name, last_name,
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
