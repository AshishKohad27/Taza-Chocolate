import connectDB from "@/config/db";
import { postSignup } from "@/controller/auth";
import type { NextResponse } from "next/server";

export async function POST(request: Request) {
    await connectDB();
    console.log("Login Running!");

    const authBody = await request.json();

    const { data, flag, desc, statusCode, message } = await postSignup({ ...authBody });

    if (flag) {
        return Response.json({
            message, desc, data,
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            message, desc, data,
        }, {
            status: statusCode,
        });
    }
}