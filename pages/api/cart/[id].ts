
import { addCart, deleteItem, getCart, updateQuantityItem } from "@/controller/cart";
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

    if (req.method === "PATCH") {
        const token: string | any = req.headers['authorization']
        const cartId: any = req.query.id;
        const { quantity }: any = req.body;
        //quantity from add button will come here

        const { message, data, flag, desc }: TResponseCart = await updateQuantityItem(token, cartId, quantity);
        if (flag) {
            return res.status(200).send({ message, desc, data });
        } else {
            return res.status(401).send({ message, desc, data });
        }
    }
    else if (req.method === "DELETE") {
        const token: string | any = req.headers['authorization']
        const cartId: any = req.query.id;
        // console.log('productId:', productId)
        //quantity from add button will come here

        const { message, data, flag, desc }: TResponseCart = await deleteItem(token, cartId);
        if (flag) {
            return res.status(200).send({ message, desc, data });
        } else {
            return res.status(401).send({ message, desc, data });
        }
    }
}
