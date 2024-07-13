import connectDB from "@/config/db";
import { PramsProps } from "@/constant/server/products";
import { ProductApiResponse } from "@/constant/server/api-response";
import { addProduct, getProduct } from "@/controller/products";

export async function GET(request: Request) {
    connectDB();
    console.log("Get Products");

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const orderBy = searchParams.get('orderBy');
    const order = searchParams.get('order');
    const params: PramsProps = { search, limit, page, orderBy, order };

    const { statusCode, total, data, flag, desc, message }: ProductApiResponse = await getProduct({ ...params });

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
        });
    }
}

export async function POST(request: Request) {
    connectDB();
    console.log("Post Product");
    const productBody = await request.json();

    const { statusCode, total, data, flag, desc, message }: ProductApiResponse = await addProduct({ ...productBody });

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
