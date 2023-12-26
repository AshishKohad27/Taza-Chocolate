import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/mongodb";
import authModel from "@/model/auth";
import { AuthResponseControllerBET } from "@/constant/server/auth-server";

export default async function authRoute(req: NextApiRequest, res: NextApiResponse) {
    await connectDB;
    console.log("I am Running", req.method);
    if (req.method === "GET") {
        const { data, flag, desc, statusCode, message } = await getAuth();
        if (flag) {
            return res.status(statusCode).send({ message, desc, data, flag });
        } else {
            return res.status(statusCode).send({ message, desc, data, flag });
        }
    }
}

// Controller of GET auth routes
async function getAuth(): Promise<any> {
    try {
        let data = await authModel.find();
        console.log("data in getAuth:", data);
        return {
            data,
            flag: true,
            desc: "",
            statusCode: 200,
            message: "Getting Data Successfully!"
        }
    } catch (error: any) {
        console.error("Error in authRoute:", error);
        return {
            data: [],
            flag: false,
            desc: error.message,
            statusCode: 400,
            message: "Error Occurs!",
        };
    }
}