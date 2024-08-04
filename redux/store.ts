import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import categorySlice from "./category/category-slice";
import productSlice from "./product/product-slice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        category: categorySlice,
        product: productSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;