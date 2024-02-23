"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { CategoryData, CategoryPayloadAction } from "@/constant/client/category";
import { GetCategoryAction, AddCategoryAction } from "@/redux/category/category-action";

type CategoryState = {
    loading: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    data: CategoryData[];
}

const initialState: CategoryState = {
    loading: false,
    error: false,
    successMessage: '',
    errorMessage: '',
    data: []
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        clearState: (state) => {
            return state = {
                ...state,
                loading: false,
                error: false,
                successMessage: '',
                errorMessage: '',
                // data: [],
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetCategoryAction.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(GetCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload.data;
            state.successMessage = action.payload.message;
        });
        builder.addCase(GetCategoryAction.rejected, (state) => {
            state.loading = true;
            state.error = false;
        });

        // Post
        builder.addCase(AddCategoryAction.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(AddCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload.data;
            state.successMessage = action.payload.message;
        });
        builder.addCase(AddCategoryAction.rejected, (state) => {
            state.loading = true;
            state.error = false;
        });
    }

});

export const { clearState } = categorySlice.actions
export default categorySlice.reducer;