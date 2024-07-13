import connectDB from "@/config/db";
import { getCategory, addCategory } from "@/controller/category";
import { PramsProps } from "@/constant/server/products";
import { CategoryApiReponse } from "@/constant/server/api-response";

export async function GET(request: Request) {
    connectDB();
    console.log("Get Category!");
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');
    const orderBy = searchParams.get('orderBy');
    const order = searchParams.get('order');
    const params: PramsProps = { search, limit, page, orderBy, order };

    const { statusCode, total, data, flag, desc, message } = await getCategory({ ...params });

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

export async function POST(request: Request) {
    connectDB();
    console.log("Add Category!");
    const categoryBody = await request.json();

    const { statusCode, total, data, flag, desc, message } = await addCategory({ ...categoryBody });

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