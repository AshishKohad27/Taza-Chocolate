import {
  TReducerActionProduct,
  TReducerStateProduct,
} from "@/constants/product";

import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.type";

const initialState: TReducerStateProduct = {
  loading: false,
  error: false,
  data: [],
  message: "",
  errorMessage: "",
};

export const productReducer = (
  state: TReducerStateProduct = initialState,
  { type, payload }: TReducerActionProduct
): any => {
  switch (type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload.data,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
