import cartM from "../model/cart";
import productM from "../model/product";
const jwt = require("jsonwebtoken");
const jwtSecretKey = process.env.JSON_SECRET_KEY;

type TAddCart = {
    token: string | any;
    productId: string;
    quantity: number;
};

export const addCart = async ({
    token,
    productId,
    quantity,
}: TAddCart): Promise<any> => {
    // console.log('productId:', productId);
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
            return {
                data: [],
                flag: false,
                desc: "",
                message: "UnAuthorized",
            };
        } else {
            // get data of that particular userId
            const userId = verifyToken._id;

            let isProductExistInCart = await cartM.find({ userId, productId });
            // console.log("isProductExistInCart:", isProductExistInCart)
            if (isProductExistInCart.length !== 0) {
                return {
                    data: isProductExistInCart,
                    flag: true,
                    desc: "",
                    message: "Product Already Exist",
                };
            }
            const getUpdateProduct = await productM.findByIdAndUpdate(
                { _id: productId },
                { quantity: quantity - 1, __v: 0 }
            );

            const data = new cartM({
                title: getUpdateProduct.title,
                description: getUpdateProduct.description,
                bar: getUpdateProduct.bar,
                caseBar: getUpdateProduct.caseBar,
                image: getUpdateProduct.image,
                category: getUpdateProduct.category,
                quantity,
                productId,
                userId,
            });
            await data.save();

            return {
                data,
                flag: true,
                desc: "",
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

export const getCart = async (token: string): Promise<any> => {
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
            return {
                data: [],
                flag: false,
                desc: "",
                message: "UnAuthorized",
            };
        } else {
            // get data of that particular userId
            const userId = verifyToken._id;

            let isProductExistInCart = await cartM.find({ userId })

            return {
                data: isProductExistInCart,
                flag: true,
                desc: "",
                message: "Getting Cart Item Successfully",
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

export const updateQuantityItem = async (
    token: string,
    cartId: string,
    quantity: number,
    // productId: string
): Promise<any> => {
    // console.log('token, productId, quantity:', cartId, quantity, token)
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
            return {
                data: [],
                flag: false,
                desc: "",
                message: "UnAuthorized",
            };
        } else {
            // get data of that particular userId
            const userId = verifyToken._id;
            // console.log('userId:', userId)

            // we change our productM quantity not done yet
            // const changingProductQuantity = await productM.findByIdAndUpdate(
            //     { _id: productId },
            //     { quantity }
            // );

            const isProductExistInCart = await cartM.findByIdAndUpdate(
                { _id: cartId },
                { quantity }
            );

            const getAllCartItem = await cartM.find({ userId });
            return {
                data: getAllCartItem,
                flag: true,
                desc: "",
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

export const deleteItem = async (
    token: string,
    cartId: string
): Promise<any> => {
    try {
        let verifyToken = await jwt.decode(token, jwtSecretKey);
        if (!verifyToken) {
            // un authorized
            return {
                data: [],
                flag: false,
                desc: "",
                message: "UnAuthorized",
            };
        } else {
            // get data of that particular userId
            const userId = verifyToken._id;

            const isProductExistInCart = await cartM.findByIdAndDelete({
                _id: cartId
            });

            const getAllCartItem = await cartM.find({ userId });
            return {
                data: getAllCartItem,
                flag: true,
                desc: "",
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
