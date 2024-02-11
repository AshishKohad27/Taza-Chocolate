import connectDB from "@/config/db";
import { verifyAuth } from "@/controller/auth";

export async function POST(request: Request) {
    await connectDB();
    const authBody = await request.json();

    const { data, flag, desc, statusCode, message } = await verifyAuth({ token: authBody.token });

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