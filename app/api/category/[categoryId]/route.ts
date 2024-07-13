import connectDB from "@/config/db";
import { updateCategory, deleteCategory, getCategoryById } from "@/controller/category";

interface CustomContext {
    params: {
        categoryId: string;
    };
}

export async function GET(request: Request, context: CustomContext) {
    connectDB();

    const categoryId = context.params.categoryId;

    const { statusCode, total, data, flag, desc, message } = await getCategoryById({ categoryId });

    if (flag) {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    }
}

export async function DELETE(request: Request, context: CustomContext) {
    connectDB();

    const categoryId = context.params.categoryId;

    const { statusCode, total, data, flag, desc, message } = await deleteCategory({ categoryId });

    if (flag) {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    }
}

export async function PATCH(request: Request, context: CustomContext) {
    connectDB();

    const categoryId = context.params.categoryId;
    const categoryBody = await request.json();

    const { statusCode, total, data, flag, desc, message } = await updateCategory({ categoryId, ...categoryBody });

    if (flag) {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    }
}