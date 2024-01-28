import { NextRequest } from "next/server";
import connectDB from "@/config/db";
import { getAuth } from "@/controller/auth";

export async function GET(request: Request) {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const { data, flag, desc, statusCode, message } = await getAuth({ search, limit, page });

    if (flag) {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        })
    }
}