import { TObjectAuth } from "@/constants/auth";
import authM from "../model/auth";
import argon2 from "argon2";
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JSON_SECRET_KEY;

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

export const postLogin = async ({
  email,
  password,
}: TObjectAuth): Promise<any> => {
  console.log(" email, password :", email, password);
  try {
    let authUser = await authM.find({ email });
    console.log("authUser:", authUser);
    if (authUser.length !== 0) {
      if (await argon2.verify(authUser[0].password, password)) {
        const token = jwt.sign(
          {
            _id: authUser[0]._id,
            email: authUser[0].email,
            name: authUser[0].name,
            role: authUser[0].role,
          },
          jwtSecretKey,
          { expiresIn: "4 days" }
        );
        // const refreshToken = jwt.sign(
        //   {
        //     _id: authUser[0]._id,
        //     email: authUser[0].email,
        //     name: authUser[0].name,
        //   },
        //   jwtSecretKey,
        //   { expiredAt: "4 days" }
        // );
        let refreshToken = "refresh";
        return {
          token,
          refreshToken,
          flag: true,
          desc: "",
          message: "Token",
        };
      } else {
        return {
          data: [],
          flag: true,
          desc: "",
          message: "You Enter Wrong Credentials",
        };
      }
    }
  } catch (e: any) {
    return {
      data: [],
      flag: true,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
};

export const tokenVerify = async (token: string): Promise<any> => {
  try {
    let data = await jwt.verify(token, jwtSecretKey);
    return {
      data: data || [],
      flag: true,
      desc: "",
      message: "Details from Token",
    };
  } catch (e: any) {
    return {
      data: [],
      flag: true,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
};
