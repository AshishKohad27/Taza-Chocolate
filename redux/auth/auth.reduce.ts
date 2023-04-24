import axios from "axios";
import {
    CLEAR_MESSAGE,
    ERROR_MESSAGE,
    GET_ALL_USERS,
    GET_DETAILS_FROM_TOKEN,
    LOGIN_ERROR,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT,
    SIGNUP_ERROR,
    SIGNUP_LOADING,
    SIGNUP_SUCCESS,
} from "./auth.types";
import { TReducerActionAuth, TReducerStateAuth } from "@/constants/redux/auth";
import { Console } from "console";

let access_token;
if (typeof window !== 'undefined') {
    access_token = localStorage.getItem("access_token");
}

if (access_token) {
    axios.defaults.headers.common["authorization_access"] = access_token;
}

const initState: TReducerStateAuth = {
    isAuth: !!access_token,
    token: access_token,
    loading: false,
    error: false,
    message: "",
    errorMessage: "",
    tokenDetails: [],
    user: [],
    allUsers: [],
};



export const userReducer = (state = initState, { type, payload }: TReducerActionAuth) => {
    switch (type) {

        // Login
        case LOGIN_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case LOGIN_SUCCESS: {
            console.log("access_token:", payload);
            localStorage.setItem("access_token", payload.access_token);
            delete axios.defaults.headers.common["authorization_access"];
            axios.defaults.headers.common["authorization_access"] =
                payload.access_token;
            return {
                ...state,
                isAuth: true,
                token: payload.access_token,
                loading: false,
                error: false,
                message: payload.message,
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: payload.message,
            };
        }

        // Signup
        case SIGNUP_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            };
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                message: payload.message,
                user: payload.data,
            };
        }
        case SIGNUP_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload.message,
            };
        }

        // clear message
        case CLEAR_MESSAGE: {
            return {
                ...state,
                message: "",
                user: [],
                errorMessage: "",
            };
        }

        // Get details from token
        case GET_DETAILS_FROM_TOKEN: {
            return {
                ...state,
                tokenDetails: payload.data,
                loading: false,
                error: false,
            };
        }

        // error message
        case ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: payload.message,
            };
        }

        //logout
        case LOGOUT: {
            localStorage.removeItem("access_token");
            delete axios.defaults.headers.common["authorization_access"];
            return {
                ...state,
                isAuth: false,
            };
        }

        //all users
        case GET_ALL_USERS: {
            return {
                ...state,
                allUsers: payload.data,
            };
        }
        default: {
            return state;
        }
    }
};
