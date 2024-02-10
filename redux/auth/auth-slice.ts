"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetAuth, SignUpAuth, LoginAuth } from "./auth-action";
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthCredentials, AuthPayloadAction, LoginPayloadAction, AuthToken } from "@/constant/client/auth";

type AuthorizationState = {
    value: number;
    loading: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    data: AuthCredentials[];
    isAuth: boolean;
    token: AuthToken;
    // AuthorizedUserDetails: [];
}
let cookiesToken: string = "";
if (typeof window !== 'undefined') {
    cookiesToken = window.sessionStorage.getItem("token_taza") || '';
}

if (cookiesToken) {

}

const initialState: AuthorizationState = {
    value: 0,
    loading: false,
    error: false,
    successMessage: '',
    errorMessage: '',
    data: [],
    isAuth: !!cookiesToken,
    token: {
        taza_token: "",
        taza_refresh_token: ""
    },
}

// console.log("cookiesToken:", cookiesToken)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        clearState: (state) => {
            return state = {
                ...state,
                value: 0,
                loading: false,
                error: false,
                successMessage: '',
                errorMessage: '',
                data: [],
                token: {
                    taza_token: "",
                    taza_refresh_token: ""
                },
            };
        },
        logout: (state) => {
            return state = {
                ...state,
                isAuth: false
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(GetAuth.fulfilled, (state, action: PayloadAction<AuthPayloadAction>) => {
            state.loading = false;
            state.error = false;
            // console.log(action);
            state.data = action.payload.data;
            state.successMessage = action.payload.message;
        });
        builder.addCase(GetAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.log(action);
        });

        // Sign Up 
        builder.addCase(SignUpAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(SignUpAuth.fulfilled, (state, action: PayloadAction<AuthPayloadAction>) => {
            state.loading = false;
            state.error = false;
            state.successMessage = action.payload.message;
        });
        builder.addCase(SignUpAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.log(action);
        });

        // Login
        builder.addCase(LoginAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
            sessionStorage.removeItem('token');
            console.log("pending...!!!!!!!!!!");
        });
        builder.addCase(LoginAuth.fulfilled, (state, action: PayloadAction<LoginPayloadAction>) => {
            sessionStorage.setItem('token_taza', action.payload.token.taza_token);
            console.log("fulfilled...!!!!!!!!!!");
            state.successMessage = action.payload.message;
            state.token = action.payload.token;
            state.loading = false;
            state.error = false;
            state.isAuth = true;
        });
        builder.addCase(LoginAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            sessionStorage.removeItem('token');
        });
    }
});

export const { increment, decrement, clearState, logout } = authSlice.actions

export default authSlice.reducer;
