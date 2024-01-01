import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/config/mongodb";
import { AuthResponseControllerBET, AuthQueryBET } from "@/constant/server/auth-server";

export default async function All_Auth(req: NextApiRequest, res: NextApiResponse) {
    await connectDB;
}
