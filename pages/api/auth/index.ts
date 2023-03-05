// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TAuthSignup } from "@/constants/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import authM from "../../../model/auth";

export default async function authRoute(
  req: NextApiRequest,
  res: NextApiResponse<TAuthSignup>
) {
  // console.log(req.method);
  if (req.method === "GET") {
    const { data, flag, message, desc }: TAuthSignup = await getAuth();
    console.log("message:", message);
    if (flag) {
      return res.status(200).send({ message, desc, data, flag });
    } else {
      return res.status(401).send({ message, desc, data, flag });
    }
  } else if (req.method === "POST") {
  }
}

async function getAuth(): Promise<any> {
  try {
    let data = await authM.find();
    return {
      data,
      flag: true,
      desc: "",
      message: "Data Get Successfully!",
    };
  } catch (e: any) {
    return {
      data: [],
      flag: true,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
}
