import { TReducerActionCart, TReducerStateCart } from "@/constants/redux/cart";
import { ADD_ITEM_TO_CART_SUCCESS, CART_ERROR, CART_LOADING, DELETE_CART_SUCCESS, GET_CART_SUCCESS, PATCH_CART_SUCCESS, SIMILAR_ITEM_IN_CART_SUCCESS } from "./cart.types";



const initialState: TReducerStateCart = {
    CartItems: [],
    loading: false,
    error: false,
    errorMessage: "",
    message: "",
    relatedProducts: [],
}


export const cartReducer = (state: TReducerStateCart = initialState, { type, payload }: TReducerActionCart): any => {
    switch (type) {

        // Get Particular User
        case GET_CART_SUCCESS: {
            return {
                ...state,
                CartItems: payload.data,
                message: payload.message,
                loading: false,
                error: false
            }
        }

        // Add Item in Cart
        case ADD_ITEM_TO_CART_SUCCESS: {
            return {
                ...state,
                CartItems: payload.data,
                message: payload.message,
                loading: false,
                error: false
            }
        }

        // Update Quantity in Cart
        case PATCH_CART_SUCCESS: {
            return {
                ...state,
                CartItems: payload.data,
                message: payload.message,
                loading: false,
                error: false
            }
        }

        //  Delete Item in Cart
        case DELETE_CART_SUCCESS: {
            return {
                ...state,
                CartItems: payload.data,
                message: payload.message,
                loading: false,
                error: false
            }
        }


        // Similar Item in Cart
        case SIMILAR_ITEM_IN_CART_SUCCESS: {
            console.log("SIMILAR_ITEM_IN_CART_SUCCESS:", payload.data)
            return {
                ...state,
                relatedProducts: payload.data,
                message: payload.message,
                loading: false,
                error: false
            }
        }


        // Loading
        case CART_LOADING: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }

        //Error
        case CART_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
                errorMessage: payload
            }
        }

        //default
        default: return state
    }
}

