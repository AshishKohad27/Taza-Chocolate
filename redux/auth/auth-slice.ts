import { createSlice } from "@reduxjs/toolkit";
import { GetAuth } from "./auth-action";
import type { PayloadAction } from '@reduxjs/toolkit'

interface item {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

type AuthState = {
    value: number;
    loading: boolean;
    error: boolean;
    errorMessage: string;
    data: item[];
}

const initialState: AuthState = {
    value: 0,
    loading: false,
    error: false,
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAuth.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(GetAuth.fulfilled, (state, action: PayloadAction<item[]>) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        });
        builder.addCase(GetAuth.rejected, (state) => {
            state.loading = false;
            state.error = true;
        });
    }
});

export const { increment, decrement } = authSlice.actions

export default authSlice.reducer;
