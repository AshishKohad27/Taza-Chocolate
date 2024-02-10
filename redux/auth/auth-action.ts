//redux/auth/auth-action.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AuthCredentials, authorizationLoginT, AuthToken } from "@/constant/client/auth";

interface ApiResponse {
    desc: string;
    message: string;
    data: AuthCredentials[];
}

interface LoginApiResponse {
    desc: string;
    message: string;
    token: AuthToken;
}

interface PayloadOfSignUp {
    payload: AuthCredentials
}

interface PayloadOfLogin {
    payload: authorizationLoginT
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

export const SignUpAuth = createAsyncThunk(
    'signup/auth',
    async ({ payload }: PayloadOfSignUp) => {
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

export const LoginAuth = createAsyncThunk(
    'login/auth',
    async ({ payload }: PayloadOfLogin) => {
        try {
            const response = await axios.post<LoginApiResponse>('/api/auth/login', payload);
            console.log("response of Login:", response.data);
            return response.data;
        } catch (error: any) {
            console.log("error in Signin:", error);
            throw error;
        }
    }
)