import { TAuth, TObjectAuth } from "@/constants/auth";
import { NextApiRequest, NextApiResponse } from "next";



export default async function loginRoute(
  req: NextApiRequest,
  res: NextApiResponse<TAuth>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const { message, flag, data, desc }: TAuth = await postLogin({
      email,
      password,
    });
    if (flag) {
      return res.status(200).send({ message, desc, data });
    } else {
      return res.status(401).send({ message, desc, data });
    }
  }
}

async function postLogin({ email, password }: TObjectAuth): Promise<any> {
  try {
  } catch (e: any) {
    return {
      data: [],
      dataLength: 0,
      flag: true,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
}
