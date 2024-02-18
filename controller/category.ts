import { CategoryApiReponse } from "@/constant/server/api-response";
import { CategoryIdProps, CategoryApiProps } from "@/constant/server/category";
import categoryModel from "@/model/category";

export const getCategory = async (): Promise<CategoryApiReponse> => {
    try {
        const data: Array<CategoryApiProps> = await categoryModel.find();
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
        const findCategory = await categoryModel.find({
            title: props.title
        });

        console.log("findCategory:", findCategory);
        if (findCategory.length > 0) {
            return {
                statusCode: 202,
                data: findCategory,
                flag: true,
                desc: "",
                message: "Category Already Exists!",
            }
        }

        const addCategory = new categoryModel({
            ...props
        });
        await addCategory.save();

        const data: Array<CategoryApiProps> = await categoryModel.find();

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
        await categoryModel.findByIdAndUpdate(
            { _id: categoryId },
            { ...props }
        )
        const data: CategoryApiProps[] = await categoryModel.find();

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