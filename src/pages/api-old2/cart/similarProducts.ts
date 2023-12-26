
import { similarProductInCart } from "@/controller/cart";
import { NextApiRequest, NextApiResponse } from "next";

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

    if (req.method === "GET") {
        const token: string | any = req.headers['authorization_access']

        const { message, data, flag, desc }: TResponseCart = await similarProductInCart(token);
        if (flag) {
            return res.status(200).send({ message, desc, data });
        } else {
            return res.status(401).send({ message, desc, data });
        }
    }

}
