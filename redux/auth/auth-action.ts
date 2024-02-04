//redux/auth/auth-action.ts
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthCredentials } from "@/constant/client/auth";

interface ApiResponse {
    desc: string;
    message: string;
    data: AuthCredentials[];
}

interface PayloadOfSignIn {
    payload: AuthCredentials
}

export const GetAuth = createAsyncThunk(
    'get/auth',
    async () => {
        try {
            const response = await axios.get<ApiResponse>("/api/auth");
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

export const SignInAuth = createAsyncThunk(
    'signin/auth',
    async ({ payload }: PayloadOfSignIn) => {
        try {
            const response = await axios.post<ApiResponse>('/api/auth/signup', payload);
            // console.log("payload of SignIn:", payload);
            console.log("response of Signin:", response);
            return response.data;
        } catch (error: any) {
            console.log("error in Signin:", error);
            throw error;
        }
    }
)