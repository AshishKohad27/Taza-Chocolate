import connectDB from "@/config/db";
import { deleteProduct, getProductById, updateProduct } from "@/controller/products";
import { ProductApiResponse } from "@/constant/server/api-response";

interface CustomContext {
    params: {
        productId: string;
    };
}

export async function GET(request: Request, context: CustomContext) {
    connectDB();
    console.log("Get By ProductId");
    const productId = context.params.productId;

    const { statusCode, total, data, flag, desc, message }: ProductApiResponse = await getProductById({ productId });

    if (flag) {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        })
    }
}

export async function DELETE(request: Request, context: CustomContext) {
    connectDB();
    console.log("Delete Product");
    const productId = context.params.productId;
    const { statusCode, total, data, flag, desc, message }: ProductApiResponse = await deleteProduct({ productId });

    if (flag) {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, total, data
        }, {
            status: statusCode,
        })
    }
}

export async function PATCH(request: Request, context: CustomContext) {
    connectDB();
    console.log("Patch Product");
    const productId = context.params.productId; // '1'
    const productBody = await request.json();

    const { statusCode, data, flag, desc, message } = await updateProduct({ productId, ...productBody });

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
