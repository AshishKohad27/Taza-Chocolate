import { authorizationRegT } from "@/constant/client/auth";
import { TReducerActionAuth } from "@/constant/client/redux";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./auth-type";
import axios, { AxiosResponse } from "axios";
// OR
// import { REDUX_URL } from '@/config/config.prod'; // Production

// 1. Signup API Call
export const postSignup =
    (payload: authorizationRegT) =>
        async (dispatch: ({ type, payload }: TReducerActionAuth) => void) => {
            try {
                dispatch({ type: SIGNUP_LOADING });
                let res: AxiosResponse = await axios.post(`/api/auth/signup`, payload);
                console.log("Response of Redux - postSignup:", res);
                dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
            } catch (error: any) {
                console.error("Error in Redux Post Signup");
                dispatch({ type: SIGNUP_ERROR });
            }
        };
