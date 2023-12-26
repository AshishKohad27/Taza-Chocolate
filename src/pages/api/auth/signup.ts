import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/mongodb";
import { AuthResponseControllerBET, AuthorizationBET } from "@/constant/server/auth-server";
import { postSignup } from "@/controller/auth";


export default async function Signup(req: NextApiRequest, res: NextApiResponse) {
    await connectDB();
    console.log("I am Running in Signup", req.method);
    if (req.method === "POST") {
        const { first_name, last_name, email, password }: AuthorizationBET = req.body;
        const { data, flag, desc, statusCode, message }: AuthResponseControllerBET = await postSignup({
            first_name, last_name, email, password
        });

        if (flag) {
            return res.status(statusCode).send({ message, desc, data, flag });
        } else {
            return res.status(statusCode).send({ message, desc, data, flag });
        }

    }
    if (req.method === "GET") {
        res.send("I am running Signup get");
        return;
    }
    res.end();
}