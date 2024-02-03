import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    value: number;
    loading: boolean;
    error: boolean;
    errorMessage: string;
}

const initialState: AuthState = {
    value: 0,
    loading: false,
    error: false,
    errorMessage: ''
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
    // extraReducers: (builder) => {

    // }
});

export default authSlice.reducer;
