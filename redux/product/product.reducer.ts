import {
  TReducerActionProduct,
  TReducerStateProduct,
} from "@/constants/product";

import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_SUCCESS,
} from "./product.type";

const initialState: TReducerStateProduct = {
  loading: false,
  error: false,
  data: [],
  singleItem: [],
  message: "",
  errorMessage: "",
};

export const productReducer = (
  state: TReducerStateProduct = initialState,
  { type, payload }: TReducerActionProduct
): any => {
  switch (type) {

    // GET PRODUCT
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data,
        message: payload.message
      };
    }

    // GET_PRODUCT_BY_ID_SUCCESS
    case GET_PRODUCT_BY_ID_SUCCESS: {
      // console.log("inside reducer get product by id:", payload)
      return {
        ...state,
        loading: false,
        error: false,
        singleItem: payload.data,
        message: payload.message
      };
    }

    // LOADING
    case PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }

    //ERROR
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload
      };
    }
    default:
      return state;
  }
};
