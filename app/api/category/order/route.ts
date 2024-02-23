import connectDB from "@/config/db";
import { getCategory, addCategory } from "@/controller/category";
import { PramsProps } from "@/constant/server/products";

export async function GET(request: Request) {
    connectDB();
    console.log("Order Category!");

    const { searchParams } = new URL(request.url);
    const order = searchParams.get('order');
    const orderByTerms = searchParams.get('orderByTerms');
    const params = { order, orderByTerms };
    console.log("params:",params)

    return Response.json(`Order by this term ${orderByTerms}`, { status: 200, });

    // const { statusCode, data, flag, desc, message } = await getCategory({  });

    // if (flag) {
    //     return Response.json({
    //         desc, message, data
    //     }, {
    //         status: statusCode,
    //     });
    // } else {
    //     return Response.json({
    //         desc, message, data
    //     }, {
    //         status: statusCode,
    //     });
    // }
}
