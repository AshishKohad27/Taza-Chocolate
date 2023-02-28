import productM from "../model/product";

type ObjectProduct = {
  _id?: String;
  title: String;
  image: String;
  description: String;
  price: Number;
  quantity: Number;
};

const getProduct = async (): Promise<any> => {
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
};

const addProduct = async ({
  title,
  image,
  description,
  price,
  quantity,
}: ObjectProduct): Promise<any> => {
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
};

const updateProduct = async ({
  _id,
  title,
  image,
  description,
  price,
  quantity,
}: ObjectProduct): Promise<any> => {
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
};

const deleteProduct = async (productId: string): Promise<any> => {
  try {
    await productM.findByIdAndDelete({
      _id: productId,
    });

    let data: ObjectProduct[] = await productM.find();

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
};

export { getProduct, addProduct, updateProduct, deleteProduct };
