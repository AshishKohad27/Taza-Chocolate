"use client";
import { CategoryData, PayloadCategory, CategoryId } from "@/constant/client/category";
import { pageProps } from "@/constant/client/client-global";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ApiResponse {
    desc: string;
    message: string;
    data: CategoryData[];
}

export const GetCategoryAction = createAsyncThunk(
    'get/category',
    async ({ search, limit, page, orderBy, order }: pageProps) => {
        console.log("CategoryRedux:", { search, limit, page, orderBy, order });
        try {
            const response = await axios.get<ApiResponse>(`/api/category?search=${search}&limit=${limit}&page=${page}&orderBy=${orderBy}&order=${order}`);
            console.log("response:", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            // return error;
            // return rejectWithValue(error);
            throw error;
        }
    }
);

export const AddCategoryAction = createAsyncThunk(
    'add/category',
    async ({ payload }: { payload: PayloadCategory }) => {

        try {
            const response = await axios.post<ApiResponse>(`/api/category`, payload);
            console.log("response:", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            // return error;
            // return rejectWithValue(error);
            throw error;
        }
    }
);

export const DeleteCategoryAction = createAsyncThunk(
    'delete/category',
    async ({ categoryId }: CategoryId) => {

        try {
            const response = await axios.delete<ApiResponse>(`/api/category/${categoryId}`);
            console.log("response:", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            // return error;
            // return rejectWithValue(error);
            throw error;
        }
    }
);

export const UpdateCategoryAction = createAsyncThunk(
    'update/category',
    async ({ categoryId, ...props }: { categoryId: CategoryId } & PayloadCategory) => {

        try {
            const response = await axios.patch<ApiResponse>(`/api/category${categoryId}`, { ...props });
            console.log("response:", response.data);
            return response.data;
        } catch (error) {
            console.error(error);
            // return error;
            // return rejectWithValue(error);
            throw error;
        }
    }
);