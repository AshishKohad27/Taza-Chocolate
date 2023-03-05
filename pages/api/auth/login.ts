import { TAuthLogin } from "@/constants/auth";
import { postLogin } from "@/controller/auth";
import { NextApiRequest, NextApiResponse } from "next";

export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse<TAuthLogin>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const { message, flag, token, desc, refreshToken }: TAuthLogin =
      await postLogin({
        email,
        password,
      });
    if (flag) {
      return res.status(200).send({ message, desc, token, refreshToken });
    } else {
      return res.status(401).send({ message, desc, token, refreshToken });
    }
  }
}
