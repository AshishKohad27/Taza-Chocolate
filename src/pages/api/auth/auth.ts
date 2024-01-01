import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/mongodb";
import { AuthResponseControllerBET, AuthQueryBET } from "@/constant/server/auth-server";
import { getAuth } from "@/controller/auth";

export default async function All_Auth(req: NextApiRequest, res: NextApiResponse) {
    await connectDB;
    if (req.method === "GET") {
        console.log("All User!");
        const { search, limit, page }: AuthQueryBET = req.query;

        const { data, flag, desc, statusCode, message }: AuthResponseControllerBET = await getAuth({ search, limit, page });
        if (flag) {
            return res.status(statusCode).send({ message, desc, data, flag });
        } else {
            return res.status(statusCode).send({ message, desc, data, flag });
        }
    }
}