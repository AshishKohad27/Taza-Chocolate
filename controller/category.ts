import { CategoryApiReponse } from "@/constant/server/api-response";
import { CategoryIdProps, CategoryApiProps } from "@/constant/server/category";
import categoryModel from "@/model/category";
import {
    PramsProps
} from "@/constant/server/products";

// Global Variables;
let globalSearch: string | "" = "";
let globalPage: number | 1 = 1;
let globalLimit: number | 10 = 10;
let globalOrderBy: string | "" = "";
let globalOrder: string | "" = "10";
let count = 1;

const GlobalParams = async ({ search, page, limit, orderBy, order }: PramsProps) => {
    let localSearch: string | "" = String(search) || "";
    let localPage: number | 1 = Number(page) || 1;
    let localLimit: number | 10 = Number(limit) || 10;
    let localOrderBy: string | "" = String(orderBy) || "";
    let localOrder: string | "" = String(order) || "";
    // globalSortArr.push(orderBy);

    const sortCriteria: { [key: string]: number } = {};
    if (orderBy) {
        sortCriteria[localOrderBy] = localOrder === "asc" ? 1 : -1;
    }

    console.log(`count: ${count}`, { sortCriteria, localSearch, localPage, localLimit, localOrderBy, localOrder });
    globalSearch = localSearch;
    globalPage = localPage;
    globalLimit = localLimit;
    globalOrderBy = localOrderBy;
    globalOrder = localOrder;

    const data: Array<CategoryApiProps> = await categoryModel
        .find({ title: { $regex: new RegExp(localSearch, 'i') } })
        .limit(localLimit)
        .skip(localLimit * (localPage - 1))
        .sort(sortCriteria as any);

    // console.log({ data });
    return data;
    // return { localSearch, localPage, localLimit };
};

export const getCategory = async ({ search,
    page,
    limit, orderBy, order }: PramsProps): Promise<CategoryApiReponse> => {
    try {
        const data: Array<CategoryApiProps> = await GlobalParams({ search, page, limit, orderBy, order });

        return {
            statusCode: 201,
            data,
            flag: true,
            desc: "",
            message: "Get Category Successfully!",
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
}

export const addCategory = async ({ ...props }: CategoryApiProps): Promise<CategoryApiReponse> => {
    try {
        console.log("Adding category!");
        console.log({ ...props });
        const findCategory = await categoryModel.find({
            title: props.title
        });

        if (findCategory.length > 0) {
            const data: Array<CategoryApiProps> = await GlobalParams({ search: globalSearch, page: globalPage, limit: globalLimit, orderBy: globalOrderBy, order: globalOrder });
            return {
                statusCode: 202,
                data,
                flag: true,
                desc: "",
                message: "Category Already Exists!",
            }
        }

        const addCategory = new categoryModel({
            ...props
        });
        await addCategory.save();

        console.log("Global:", { globalSearch, globalPage, globalLimit });

        const data: Array<CategoryApiProps> = await GlobalParams({ search: globalSearch, page: globalPage, limit: globalLimit, orderBy: globalOrderBy, order: globalOrder });

        return {
            statusCode: 201,
            data,
            flag: true,
            desc: "",
            message: "Category Added Successfully!",
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
}

export const updateCategory = async ({ categoryId, ...props }: { categoryId: string }): Promise<CategoryApiReponse> => {
    try {
        console.log("Update category!");

        await categoryModel.findByIdAndUpdate(
            { _id: categoryId },
            { ...props }
        )

        console.log("Global:", { globalSearch, globalPage, globalLimit });

        const data: Array<CategoryApiProps> = await GlobalParams({ search: globalSearch, page: globalPage, limit: globalLimit, orderBy: globalOrderBy, order: globalOrder });
        return {
            statusCode: 201,
            data,
            flag: true,
            desc: "",
            message: "Category Updated Successfully!",
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
}

export const deleteCategory = async ({ categoryId }: CategoryIdProps): Promise<CategoryApiReponse> => {
    try {
        await categoryModel.findByIdAndDelete({
            _id: categoryId
        });
        const data: Array<CategoryApiProps> = await categoryModel.find();
        return {
            statusCode: 201,
            data,
            flag: true,
            desc: "",
            message: "Category Delete Successfully!",
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
}