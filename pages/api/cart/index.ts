
import { getCart } from "@/controller/cart";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

type TResponseCart = {
    message: string;
    flag?: boolean;
    data: [];
    desc: string;
}



export default async function Cart(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === "POST") {
        const token: string | any = req.headers['authorization']
        const { productId, quantity }: any = req.body;
        //quantity from add button will come here

        const { message, data, flag, desc }: TResponseCart = await getCart({ token, productId, quantity });
        if (flag) {
            return res.status(200).send({ message, desc, data });
        } else {
            return res.status(401).send({ message, desc, data });
        }
    }
}
