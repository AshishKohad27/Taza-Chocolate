import { TReducerActionCart } from "@/constants/redux/cart";
import axios, { AxiosResponse } from "axios";
import {
    ADD_ITEM_TO_CART_SUCCESS,
    CART_ERROR,
    CART_LOADING,
    DELETE_CART_SUCCESS,
    GET_CART_SUCCESS,
    PATCH_CART_SUCCESS,
    SIMILAR_ITEM_IN_CART_SUCCESS,
} from "./cart.types";


//get Cart Item
export const getCartItem =
    () => async (dispatch: ({ type, payload }: TReducerActionCart) => void) => {
        try {
            dispatch({ type: CART_LOADING });
            let res: AxiosResponse = await axios.get(`/api/cart`);
            console.log("res in cart item get:", res.data);
            dispatch({ type: GET_CART_SUCCESS, payload: res.data });
        } catch (e: any) {
            dispatch({ type: CART_ERROR });
        }
    };

type ItemPayloadT = {
    productId: string;
    quantity: number;
};

export const addItemInCart =
    (payload: ItemPayloadT) =>
        async (dispatch: ({ type, payload }: TReducerActionCart) => void) => {
            // console.log("payload:", payload);
            try {
                dispatch({ type: CART_LOADING });
                let res: AxiosResponse = await axios.post(`/api/cart`, payload);
                // console.log("res:", res.data.message);
                dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: res.data });
            } catch (e: any) {
                dispatch({ type: CART_ERROR });
            }
        };

type deleteItemPayloadT = {
    productId: string;
    userId: string;
};

export const deleteItemInCart =
    (payload: deleteItemPayloadT) =>
        async (dispatch: ({ type, payload }: TReducerActionCart) => void) => {
            // console.log("payload in Delete Cart:", payload);
            try {
                dispatch({ type: CART_LOADING });
                let res: AxiosResponse = await axios.delete(`/api/cart/${payload.productId}`);
                // console.log("res:", res.data.message);
                dispatch({ type: DELETE_CART_SUCCESS, payload: res.data });
            } catch (e: any) {
                dispatch({ type: CART_ERROR });
            }
        };

export const updateItemInCart =
    (payload: ItemPayloadT) =>
        async (dispatch: ({ type, payload }: TReducerActionCart) => void) => {
            console.log("payload in updateItem IN cart:", payload.quantity);
            try {
                dispatch({ type: CART_LOADING });
                let res: AxiosResponse = await axios.patch(`/api/cart/${payload.productId}`, { quantity: payload.quantity });
                // console.log("res:", res.data.message);
                dispatch({ type: PATCH_CART_SUCCESS, payload: res.data });
            } catch (e: any) {
                dispatch({ type: CART_ERROR });
            }
        };

//similar product
export const similarProduct =
    () => async (dispatch: ({ type, payload }: TReducerActionCart) => void) => {
        try {
            dispatch({ type: CART_LOADING });
            let res: AxiosResponse = await axios.get(`/api/cart/similarProducts`);
            console.log("res in similar product:", res.data.data);
            dispatch({ type: SIMILAR_ITEM_IN_CART_SUCCESS, payload: res.data });
        } catch (e: any) {
            dispatch({ type: CART_ERROR });
        }
    };
