import { NextApiRequest, NextApiResponse } from "next";
import productM from "../../../model/product";
import connectDB from "../../../config/db";

type ObjectProduct = {
  _id?: String;
  title: String;
  image: String;
  description: String;
  price: Number;
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

  console.log("Method:", req.method);

  if (req.method === "GET") {
    const { data, dataLength, flag, message, desc }: TProduct =
      await getProduct();

    console.log("message:", message);
    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  } else if (req.method === "POST") {
    const Body = req.body;

    const { data, dataLength, flag, message, desc }: TProduct =
      await addProduct(Body);
    console.log("message:", message);

    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  } else if (req.method === "PATCH") {
    const Body: ObjectProduct = req.body;

    const { data, dataLength, flag, message, desc }: TProduct =
      await updateProduct(Body);
    console.log("message:", message);

    if (flag) {
      return res.status(200).send({ message, desc, dataLength, data });
    } else {
      return res.status(401).send({ message, desc, dataLength, data });
    }
  }
}

async function getProduct(): Promise<any> {
  //async function return promise that what typescript needed
  try {
    let data: Array<ObjectProduct> = await productM.find();
    // console.log("data:", data);
    return {
      data,
      dataLength: data.length || 0,
      flag: true,
      desc: "",
      message: "Product Get Successfully!",
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

async function addProduct({
  title,
  image,
  description,
  price,
  quantity,
}: ObjectProduct): Promise<any> {
  console.log("description:", description);
  try {
    let addProduct = new productM({
      title,
      image,
      description,
      price,
      quantity,
    });
    await addProduct.save();

    let data: Array<ObjectProduct> = await productM.find();
    // console.log("data:", data);
    return {
      data,
      dataLength: data.length || 0,
      flag: true,
      desc: "",
      message: "Product Add Successfully!",
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

async function updateProduct({
  _id,
  title,
  image,
  description,
  price,
  quantity,
}: ObjectProduct): Promise<any> {
  try {
    await productM.findByIdAndUpdate(
      { _id },
      {
        title,
        image,
        description,
        price,
        quantity,
      }
    );

    let data: Array<ObjectProduct> = await productM.find();
    // console.log("data:", data);
    return {
      data,
      dataLength: data.length || 0,
      flag: true,
      desc: "",
      message: "Product Update Successfully!",
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
