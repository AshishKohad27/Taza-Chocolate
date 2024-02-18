import { ProductApiProps } from "@/constant/server/products";
import { AuthorizationBET } from "@/constant/server/auth";
import { CategoryApiProps } from "@/constant/server/category";


export type CategoryApiReponse = {
    statusCode: number;
    data: CategoryApiProps[] | [];
    flag: boolean;
    desc: string;
    message: string;
}

export type ProductApiResponse = {
    statusCode: number;
    data: ProductApiProps[] | [];
    flag: boolean;
    desc: string;
    message: string;
}

export type AuthApiResponse = {
    statusCode: number;
    data: AuthorizationBET[] | [];
    flag: boolean;
    desc: string;
    message: string;
}