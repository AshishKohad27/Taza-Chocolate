import { createSlice } from "@reduxjs/toolkit";
import { GetAuth, SignInAuth } from "./auth-action";
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthCredentials, AuthPayloadAction } from "@/constant/client/auth";

type AuthorizationState = {
    value: number;
    loading: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    data: AuthCredentials[];
}

const initialState: AuthorizationState = {
    value: 0,
    loading: false,
    error: false,
    successMessage: '',
    errorMessage: '',
    data: [],
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
            return state = initialState;
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

        // Sign In 
        builder.addCase(SignInAuth.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(SignInAuth.fulfilled, (state, action: PayloadAction<AuthPayloadAction>) => {
            state.loading = false;
            state.error = false;
            state.successMessage = action.payload.message;
        });
        builder.addCase(SignInAuth.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            console.log(action);
        });
    }
});

export const { increment, decrement, clearState } = authSlice.actions

export default authSlice.reducer;
