import cartM from "../model/cart";
import productM from "../model/product";
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JSON_SECRET_KEY;

type TAddCart = {
    token: string | any;
    productId: string;
    quantity: number
};

export const getCart = async ({ token, productId, quantity }: TAddCart): Promise<any> => {
    console.log('productId:',  productId);
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
        } else {
            // get data of that particular userId
            const userId = verifyToken._id;
            // const getCart = await productM.findOne(
            //     { _id: productId },
            //     { _id: 0, __v: 0 }
            // );
            // console.log('getCart:', getCart)

            // let isProductExistInCart = await cartM.findOne({ userId: })

            const getUpdateProduct = await productM.findByIdAndUpdate(
                { _id: productId },
                { "quantity": quantity - 1, __v: 0, }
            );

            const data = new cartM({
                title: getUpdateProduct.title,
                description: getUpdateProduct.description,
                bar: getUpdateProduct.bar,
                caseBar: getUpdateProduct.caseBar,
                image: getUpdateProduct.image,
                category: getUpdateProduct.category,
                quantity: 1,
                productId: productId,
                userId: "",
            });
            await data.save();
            console.log("data:", data);

            return {
                data,
                flag: true,
                desc: verifyToken,
                message: "Item added in cart successfully",
            };
        }
    } catch (e: any) {
        return {
            data: [],
            flag: true,
            desc: e.message,
            message: "Error Occurs!",
        };
    }
};

export const addCart = async (token: string | any): Promise<any> => {
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
        } else {
            // get data of that particular userId
            const data = await cartM.find({});
            return {
                data,
                flag: true,
                desc: verifyToken,
                message: "Details from Token",
            };
        }
    } catch (e: any) {
        return {
            data: [],
            flag: true,
            desc: e.message,
            message: "Error Occurs!",
        };
    }
};
