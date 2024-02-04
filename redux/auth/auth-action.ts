//redux/auth/auth-action.ts
import { createAsyncThunk, AsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface item {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

interface ApiResponse {
    results: item[];
}

export const GetAuth = createAsyncThunk(
    'get/auth',
    async () => {
        try {
            const response = await axios.get<ApiResponse>("https://opentdb.com/api.php?amount=10&category=9");
            console.log("response:", response.data.results);
            return response.data.results;
        } catch (error) {
            throw error;
        }
    }
);
