import productM from "../model/product";

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

const getProduct = async (payload: string): Promise<any> => {
  //async function return promise that what typescript needed
  try {
    let data: Array<ObjectProduct>;
    if (payload) {
      data = await productM.find({ category: payload });
    } else {
      data = await productM.find();
    }


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
  bar,
  caseBar,
  category,
  quantity,
}: ObjectProduct): Promise<any> => {
  console.log("description:", description);
  try {
    let addProduct = new productM({
      title,
      image,
      description,
      bar,
      caseBar,
      category,
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
  bar,
  caseBar,
  category,
  quantity,
}: ObjectProduct): Promise<any> => {
  try {
    await productM.findByIdAndUpdate(
      { _id },
      {
        title,
        image,
        description,
        bar,
        caseBar,
        category,
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
