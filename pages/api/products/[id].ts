import { NextApiRequest, NextApiResponse } from "next";
import productM from "../../../model/product";
import { deleteProduct, getProductById } from "../../../controller/product";

type ObjectProduct = {
    _id?: string;
    title: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
};

type TProduct = {
    data: ObjectProduct[];
    flag?: Boolean;
    message: string;
    desc: string;
    dataLength?: number;
};

export default async function productRoutes(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "DELETE") {
        const productId: any = req.query.id;

        const { data, message, desc, flag, dataLength }: TProduct =
            await deleteProduct(productId);
        if (flag) {
            return res.status(201).send({ message, desc, dataLength, data });
        } else {
            return res.status(401).send({ message, desc, dataLength, data });
        }
    }
    else if (req.method === "GET") {
        const productId: any = req.query.id;
        // console.log("productId in backend:", productId)
        const { data, message, desc, flag, dataLength }: TProduct =
            await getProductById(productId);
        if (flag) {
            return res.status(201).send({ message, desc, dataLength, data });
        } else {
            return res.status(401).send({ message, desc, dataLength, data });
        }
    }
}
