import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/mongodb";
import { AuthLoginBET, AuthResponseControllerBET, AuthResponseLoginControllerBET } from "@/constant/server/auth-server";
import { postLogin } from "@/controller/auth";

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    console.log("Login Running!")
    if (req.method === "POST") {
        const { email, password }: AuthLoginBET = req.body;
        const { token, flag, desc, statusCode, message }: AuthResponseControllerBET = await postLogin({
            email, password
        });

        if (flag) {
            return res.status(statusCode).send({ message, desc, token, flag });
        } else {
            return res.status(statusCode).send({ message, desc, token, flag });
        }
    }
    res.end();
}