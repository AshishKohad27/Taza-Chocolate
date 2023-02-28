// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type TAuth = {
  message: string;
  flag: boolean;
  data: string;
  desc: string;
};

export default function authRoute(
  req: NextApiRequest,
  res: NextApiResponse<TAuth>
) {
  // console.log(req.method);
  if (req.method === "GET") {
    const { data, flag, message, desc }: TAuth = getAuth();
    console.log("message:", message);
    if (flag) {
      return res.status(200).send({ message, desc, data, flag });
    } else {
      return res.status(401).send({ message, desc, data, flag });
    }
  } else if (req.method === "POST") {
  }
}

function getAuth(): any {
  try {
    // let data = "react with next js";
    let data = 1;
    return {
      data,
      flag: true,
      desc: "",
      message: "Data Get Successfully!",
    };
  } catch (e: any) {
    return {
      data: "",
      flag: true,
      desc: "",
      message: "Error Occurs!",
    };
  }
}
