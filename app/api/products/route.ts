import connectDB from "@/config/db";
import { PramsProps } from "@/constant/server/products";
import { addProduct, getProduct } from "@/controller/products";

export async function GET(request: Request) {
    connectDB();
    console.log("Get Products");
    // const { searchParams } = new URL(request.url);
    // const search: string | null = searchParams.get('search');

    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const params: PramsProps = { search, limit, page };


    const { statusCode, data, flag, desc, message } = await getProduct({ ...params });

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

export async function POST(request: Request) {
    connectDB();
    console.log("Post Product");
    const productBody = await request.json();

    const { statusCode, data, flag, desc, message } = await addProduct({ ...productBody });

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
