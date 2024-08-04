"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
// import { CategoryData, CategoryPayloadAction } from "@/constant/client/category";
import { ProductData, ProductPayloadAction } from "@/constant/client/product";
// import { GetCategoryAction, AddCategoryAction, GetByIdCategoryAction, DeleteCategoryAction,UpdateCategoryAction } from "@/redux/category/category-action";
import { GetProductAction, } from "@/redux/product/product-action";

type ProductState = {
    loading: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    total: number;
    data: ProductData[];
    singleData: ProductData[];
}

const initialState: ProductState = {
    loading: false,
    error: false,
    successMessage: '',
    errorMessage: '',
    total: 0,
    data: [],
    singleData: [],
}

export const productSlice = createSlice({
    name: "product",
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
        builder.addCase(GetProductAction.pending, (state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(GetProductAction.fulfilled, (state, action: PayloadAction<ProductPayloadAction>) => {
            state.loading = false;
            state.error = false;
            state.total = action.payload.total;
            state.data = action.payload.data;
            state.successMessage = action.payload.message;
        });
        builder.addCase(GetProductAction.rejected, (state) => {
            state.loading = true;
            state.error = false;
        });

        // // Get By Id
        // builder.addCase(GetByIdCategoryAction.pending, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });
        // builder.addCase(GetByIdCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.total = action.payload.total;
        //     state.singleData = action.payload.data;
        //     state.successMessage = action.payload.message;
        // });
        // builder.addCase(GetByIdCategoryAction.rejected, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });

        // // Post
        // builder.addCase(AddCategoryAction.pending, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });
        // builder.addCase(AddCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.total = action.payload.total;
        //     state.data = action.payload.data;
        //     state.successMessage = action.payload.message;
        // });
        // builder.addCase(AddCategoryAction.rejected, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });

        // // Delete
        // builder.addCase(DeleteCategoryAction.pending, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });
        // builder.addCase(DeleteCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.total = action.payload.total;
        //     state.data = action.payload.data;
        //     state.successMessage = action.payload.message;
        // });
        // builder.addCase(DeleteCategoryAction.rejected, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });

        // // Update
        // builder.addCase(UpdateCategoryAction.pending, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });
        // builder.addCase(UpdateCategoryAction.fulfilled, (state, action: PayloadAction<CategoryPayloadAction>) => {
        //     state.loading = false;
        //     state.error = false;
        //     state.total = action.payload.total;
        //     state.data = action.payload.data;
        //     state.successMessage = action.payload.message;
        // });
        // builder.addCase(UpdateCategoryAction.rejected, (state) => {
        //     state.loading = true;
        //     state.error = false;
        // });
    }

});

export const { clearState } = productSlice.actions
export default productSlice.reducer;