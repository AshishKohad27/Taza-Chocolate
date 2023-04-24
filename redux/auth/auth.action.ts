import axios from "axios";
import {
    ERROR_MESSAGE,
    GET_DETAILS_FROM_TOKEN,
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_LOADING,
    SIGNUP_SUCCESS,
} from "./auth.types";
import { TReducerActionAuth } from "@/constants/redux/auth";

type payLoadT = {
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
};

// Signup
export const postSign =
    (payload: payLoadT) =>
        async (dispatch: ({ type, payload }: TReducerActionAuth) => void) => {
            try {
                dispatch({ type: SIGNUP_LOADING });
                let res = await axios.post(`/api/auth/signup`, payload);
                console.log("res:", res.data);
                dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
            } catch (e) {
                dispatch({ type: SIGNUP_ERROR });
            }
        };

//Login
export const postLogin =
    (payload: payLoadT) =>
        async (dispatch: ({ type, payload }: TReducerActionAuth) => void) => {
            console.log("login payload", payload);
            try {
                dispatch({ type: LOGIN_LOADING });
                let res = await axios.post(`/api/auth/login`, payload);
                console.log("res:", res.data);
                dispatch({ type: LOGIN_SUCCESS, payload: res.data });
            } catch (e: any) {
                console.log("e:", e.response.data.messages);
                dispatch({ type: LOGIN_ERROR });
            }
        };

//Verify token and get result
export const getDetailsFromToken =
    (payload: { access_token: string | null }) =>
        async (dispatch: ({ type, payload }: TReducerActionAuth) => void) => {
            try {
                let res = await axios.post(`/api/auth/token`, payload);
                console.log("res:", res.data);
                dispatch({ type: GET_DETAILS_FROM_TOKEN, payload: res.data });
            } catch (e: any) {
                dispatch({ type: ERROR_MESSAGE, payload: e.response.data });
            }
        };
