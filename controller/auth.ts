import { TObjectAuth } from "@/constants/auth";
import authM from "../model/auth";
import argon2 from "argon2";

export const postSignup = async ({
  name,
  email,
  password,
}: TObjectAuth): Promise<any> => {
  const hashPassword: string = await argon2.hash(password);
  try {
    let authUser: Array<TObjectAuth> = await authM.find({ email });
    console.log("authUser:", authUser);
    //if present
    if (authUser.length !== 0) {
      return {
        data: authUser,
        flag: true,
        desc: "",
        message: "User Already Present",
      };
    }
    //if user not present
    let CreateAuth = new authM({ name, email, password: hashPassword });
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
