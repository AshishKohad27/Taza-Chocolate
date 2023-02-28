import { NextApiRequest, NextApiResponse } from "next";
import productM from "../../../model/product";

type objectProduct = {
  _id?: string;
  title: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
};

type TProduct = {
  data: objectProduct[];
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
}

async function deleteProduct(productId: string): Promise<any> {
  try {
    await productM.findByIdAndDelete({
      _id: productId,
    });

    let data: objectProduct[] = await productM.find();

    return {
      data,
      dataLength: data.length || 0,
      message: "Product Delete Successfully",
      flag: true,
      desc: "",
    };
  } catch (e: any) {
    return {
      data: [],
      dataLength: 0,
      flag: true,
      desc: e.message,
      message: "Error Occurs!",
    };
  }
}
