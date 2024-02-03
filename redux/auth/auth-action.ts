import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetAuth = createAsyncThunk(
    'get/auth',
    async () => {
        try {
            const response = await axios.get("https://opentdb.com/api.php?amount=10&category=9");
            console.log("response:", response);
            return response.data;  // Assuming you want to return the data part of the response
        } catch (error) {
            throw error;  // Throwing the error will automatically reject the promise with this error
        }
    }
);
