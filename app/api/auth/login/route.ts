import connectDB from "@/config/db";
import { postLogin } from "@/controller/auth";
import type { NextResponse } from "next/server";

export async function POST(request: NextResponse) {
    await connectDB();
    console.log("Login Running!");
    const authBody = await request.json();

    const { token, flag, desc, statusCode, message } = await postLogin({ ...authBody });

    if (flag) {
        return Response.json({
            message, desc, token
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            message, desc, token
        }, {
            status: statusCode,
        });
    }
}