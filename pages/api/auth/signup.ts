import { TAuth, TObjectAuth } from "@/constants/auth";
import { NextApiRequest, NextApiResponse } from "next";
import authM from "../../../model/auth";

export default async function Signup(
  req: NextApiRequest,
  res: NextApiResponse<TAuth>
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const { message, flag, data, desc } = await postSignup({ email, password });
    if (flag) {
      return res.status(201).send({ message, data, desc });
    } else {
      return res.status(401).send({ message, data, desc });
    }
  }
}

export const postSignup = async ({
  email,
  password,
}: TObjectAuth): Promise<any> => {
  try {
    let authUser: Array<TObjectAuth> = await authM.find({ email });
    console.log("authUser:", authUser);

//     //if present
    if (authUser.length !== 0) {
      return {
        data: authUser,
        flag: true,
        desc: "",
        message: "User Already Present",
      };
    }
    //if user not present
    let CreateAuth = new authM({ email, password });
    await CreateAuth.save();

    return {
      data: CreateAuth,
      flag: true,
      desc: "",
      message: "User Create Successfully!",
    };
  } catch (e: any) {
    return {
      data: [],
      flag: false,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
};
