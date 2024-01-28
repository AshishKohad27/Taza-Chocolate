import connectDB from "@/config/db";
import { deleteAuth, updateAuth } from "@/controller/auth";

interface CustomContext {
    params: {
        authId: string;
    };
}

export async function DELETE(request: Request, context: CustomContext) {
    await connectDB();
    const AuthId: string = context.params.authId;

    const { data, flag, desc, statusCode, message } = await deleteAuth({ AuthId });

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

export async function PATCH(request: Request, context: CustomContext) {
    console.log("Update Auth!");
    await connectDB();
    const AuthId: string = context.params.authId;
    const authBody = await request.json();

    const { data, flag, desc, statusCode, message } = await updateAuth({ AuthId, ...authBody });

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