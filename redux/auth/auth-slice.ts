"use client";

import { createSlice } from "@reduxjs/toolkit";
import { GetAuth, SignUpAuth, LoginAuth, verifyAuth } from "./auth-action";
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthCredentials, AuthPayloadAction, LoginPayloadAction, AuthToken } from "@/constant/client/auth";
import axios from "axios";

type AuthorizationState = {
    value: number;
    loading: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    data: AuthCredentials[];
    isAuth: boolean;
    token: AuthToken;
    AuthorizedUserDetails: AuthCredentials[];
}

let cookiesToken: string = "";
let cookiesTokenRefesh: string = "";
if (typeof window !== 'undefined') {
    cookiesToken = window.sessionStorage.getItem("token_taza") || '';
    cookiesTokenRefesh = window.sessionStorage.getItem("token_taza_refresh") || '';
    axios.defaults.headers.common["Token_taza"] = cookiesToken;
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
        taza_token: cookiesToken,
        taza_refresh_token: cookiesTokenRefesh
    },
    AuthorizedUserDetails: []
}

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
                // data: [],
                token: {
                    taza_token: cookiesToken,
                    taza_refresh_token: cookiesTokenRefesh
                },
                AuthorizedUserDetails: []
            };
        },
        logout: (state) => {
            console.log("Logout!!");
            sessionStorage.removeItem('token_taza');
            sessionStorage.removeItem('token_taza_refresh');
            delete axios.defaults.headers.common["Token_taza"];
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
            console.log("actionData:",action.payload.data);
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
            sessionStorage.removeItem('token_taza');
            console.log("pending...!!!!!!!!!!");
        });
        builder.addCase(LoginAuth.fulfilled, (state, action: PayloadAction<LoginPayloadAction>) => {
            sessionStorage.setItem('token_taza', action.payload.token.taza_token);
            sessionStorage.setItem('token_taza_refresh', action.payload.token.taza_token);
            delete axios.defaults.headers.common["Token_taza"];
            axios.defaults.headers.common["Token_taza"] = action.payload.token.taza_token;

            state.successMessage = action.payload.message;
            state.token = action.payload.token;
            state.loading = false;
            state.error = false;
            state.isAuth = true;
        });
        builder.addCase(LoginAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            sessionStorage.removeItem('token_taza');
        });

        // Verify
        builder.addCase(verifyAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(verifyAuth.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state.AuthorizedUserDetails = action.payload.data;
            state.successMessage = action.payload.message;
        });
        builder.addCase(verifyAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
        });

    }
});

export const { increment, decrement, clearState, logout } = authSlice.actions

export default authSlice.reducer;
