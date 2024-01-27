import {
    PramsProps,
    ProductIdProps,
    ProductApiProps,
} from "@/constant/server/products";
import productModel from "@/model/product";

// Global Variables;
let globalSearch: string | "";
let globalPage: number | 1;
let globalLimit: number | 1;

const GlobalParams = ({ search, page, limit }: PramsProps) => {
    let localSearch: string | "" = String(search) || "";
    let localPage: number | 1 = Number(page) || 1;
    let localLimit: number | 10 = Number(limit) || 10;

    globalSearch = localSearch;
    globalPage = localPage;
    globalLimit = localLimit;

    return { localSearch, localPage, localLimit };
};

export const addProduct = async ({
    ...props
}: ProductApiProps): Promise<any> => {
    console.log("Post Controller");
    try {
        let addProduct = new productModel({
            ...props,
        });
        await addProduct.save();

        let data: Array<ProductApiProps> = await productModel.find();

        return {
            statusCode: 201,
            data,
            flag: true,
            desc: "",
            message: "Product Add Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};

export const getProduct = async ({
    search,
    page,
    limit,
}: PramsProps): Promise<any> => {
    //async function return promise that what typescript needed
    console.log("Get Controller");
    try {
        // Setting Global Varibales
        GlobalParams({ search, page, limit });

        const data: Array<ProductApiProps> = await productModel
            .find({ title: { $regex: globalSearch } })
            .skip(globalPage)
            .limit(globalPage * globalLimit);

        // console.log("data:", data);
        return {
            statusCode: 200,
            data,
            flag: true,
            desc: "",
            message: "Product Get Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};

export const getProductById = async ({
    productId,
}: ProductIdProps): Promise<any> => {
    console.log("Get By Id Controller");
    try {
        let data: ProductApiProps[] | null = await productModel.find({
            _id: productId,
        });
        return {
            statusCode: 200,
            data,
            message: "Get Single Item Successfully",
            flag: true,
            desc: "",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs in get product by ID!",
        };
    }
};

export const deleteProduct = async ({
    productId,
}: ProductIdProps): Promise<any> => {
    console.log("Delete Controller");
    try {
        await productModel.findByIdAndDelete({
            _id: productId,
        });

        const data: Array<ProductApiProps> = await productModel
            .find({ title: { $regex: globalSearch } })
            .skip(globalPage)
            .limit(globalPage * globalLimit);

        return {
            statusCode: 201,
            data,
            message: "Product Delete Successfully",
            flag: true,
            desc: "",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};

export const updateProduct = async ({
    productId,
    ...props
}: {
    productId: string;
}): Promise<any> => {
    console.log("Update Controller");
    try {
        await productModel.findByIdAndUpdate(
            { _id: productId },
            {
                ...props,
            }
        );

        const data: Array<ProductApiProps> = await productModel
            .find({ title: { $regex: globalSearch } })
            .skip(globalPage)
            .limit(globalPage * globalLimit);

        return {
            statusCode: 200,
            data,
            flag: true,
            desc: "",
            message: "Product Update Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            data: [],
            flag: true,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};
