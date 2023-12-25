import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../config/db";
import {
  getProduct,
  addProduct,
  updateProduct,
} from "../../../controller/product";

type ObjectProduct = {
  _id?: String;
  title: String;
  description: String;
  bar: String;
  caseBar: String;
  image: String;
  category: String;
  quantity: Number;
};

type TProduct = {
  message: string;
  flag?: boolean;
  data: Array<ObjectProduct>;
  desc: string;
  dataLength?: number;
};

export default async function productRoutes(
  req: NextApiRequest,
  res: NextApiResponse<TProduct>
) {
  await connectDB();
  // console.log("Method:", req.method);
  if (req.method === "GET") {
    const payload: any = req.query.category;
    // console.log('payload:', payload)
    const { data, dataLength, flag, message, desc }: TProduct =
      await getProduct(payload);

    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  } else if (req.method === "POST") {
    const Body = req.body;

    const { data, dataLength, flag, message, desc }: TProduct =
      await addProduct(Body);

    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  } else if (req.method === "PATCH") {
    const Body: ObjectProduct = req.body;

    const { data, dataLength, flag, message, desc }: TProduct =
      await updateProduct(Body);

    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  }
}