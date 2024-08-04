import {
    PramsProps,
    ProductIdProps,
    ProductApiProps,
} from "@/constant/server/products";
import { ProductApiResponse } from "@/constant/server/api-response";
import productModel from "@/model/product";

// Global Variables;
let globalSearch: string | "" = "";
let globalPage: number | 1 = 1;
let globalLimit: number | 10 = 10;
let globalOrderBy: string | "" = "";
let globalOrder: string | "" = "";
const sortCriteria: { [key: string]: number } = {};

const GlobalParams = async ({
    search,
    page,
    limit,
    orderBy,
    order,
}: PramsProps): Promise<ProductApiProps[]> => {
    let localSearch: string | "" = String(search) || "";
    let localPage: number | 1 = Number(page) || 1;
    let localLimit: number | 10 = Number(limit) || 10;
    let localOrderBy: string | "" = String(orderBy) || "";
    let localOrder: string | "" = String(order) || "";

    globalSearch = localSearch;
    globalPage = localPage;
    globalLimit = localLimit;
    globalOrderBy = localOrderBy;
    globalOrder = localOrder;

    if (orderBy) {
        sortCriteria[localOrderBy] = localOrder === "asc" ? 1 : -1;
    }

    const data: Array<ProductApiProps> = await productModel
        .find({ title: { $regex: globalSearch } })
        .limit(globalLimit)
        .skip(globalLimit * (globalPage - 1))
        .sort(sortCriteria as any);

    return data;
    // return { localSearch, localPage, localLimit };
};

const TotalData = async (): Promise<number> => {
    try {
        const data: Array<ProductApiProps> = await productModel.find({});
        console.log("data:", data);
        return data.length;
    } catch (e) {
        return 0;
    }
};

export const getProduct = async ({
    search,
    page,
    limit,
    orderBy,
    order,
}: PramsProps): Promise<ProductApiResponse> => {
    //async function return promise that what typescript needed
    console.log("Get Controller");
    try {
        const data: Array<ProductApiProps> = await GlobalParams({
            search,
            page,
            limit,
            orderBy,
            order,
        });

        return {
            statusCode: 200,
            total: await TotalData(),
            data,
            flag: true,
            desc: "",
            message: "Product Get Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            total: 0,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};

export const getProductById = async ({
    productId,
}: ProductIdProps): Promise<ProductApiResponse> => {
    console.log("Get By Id Controller");
    try {
        let data: ProductApiProps[] | null = await productModel.find({
            _id: productId,
        });

        return {
            statusCode: 200,
            total: await TotalData(),
            data,
            message: "Get Single Item Successfully",
            flag: true,
            desc: "",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            total: 0,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs in get product by ID!",
        };
    }
};

export const addProduct = async ({
    ...props
}: ProductApiProps): Promise<ProductApiResponse> => {
    console.log("Post Controller");
    try {
        let addProduct = new productModel({
            ...props,
        });
        await addProduct.save();

        const data: Array<ProductApiProps> = await GlobalParams({
            search: globalSearch,
            page: globalPage,
            limit: globalLimit,
            orderBy: globalOrderBy,
            order: globalOrder,
        });

        return {
            statusCode: 201,
            total: await TotalData(),
            data,
            flag: true,
            desc: "",
            message: "Product Add Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            total: 0,
            data: [],
            flag: false,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};

export const deleteProduct = async ({
    productId,
}: ProductIdProps): Promise<ProductApiResponse> => {
    console.log("Delete Controller");
    try {
        await productModel.findByIdAndDelete({
            _id: productId,
        });

        const data: Array<ProductApiProps> = await GlobalParams({
            search: globalSearch,
            page: globalPage,
            limit: globalLimit,
            orderBy: globalOrderBy,
            order: globalOrder,
        });


        return {
            statusCode: 201,
            total: await TotalData(),
            data,
            message: "Product Delete Successfully",
            flag: true,
            desc: "",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            total: 0,
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
}): Promise<ProductApiResponse> => {
    console.log("Update Controller");
    try {
        await productModel.findByIdAndUpdate(
            { _id: productId },
            {
                ...props,
            }
        );

        const data: Array<ProductApiProps> = await GlobalParams({
            search: globalSearch,
            page: globalPage,
            limit: globalLimit,
            orderBy: globalOrderBy,
            order: globalOrder,
        });

        return {
            statusCode: 200,
            total: await TotalData(),
            data,
            flag: true,
            desc: "",
            message: "Product Update Successfully!",
        };
    } catch (error: any) {
        return {
            statusCode: 400,
            total: 0,
            data: [],
            flag: true,
            desc: error.message,
            message: "Error Occurs!",
        };
    }
};