import { TReducerActionProduct } from "@/constants/product";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import * as types from "./product.type";

type ObjectProduct = {
  _id?: String;
  title: String;
  description: String;
  bar: String;
  caseBar: String;
  image: String;
  category: String;
  quantity: Number;
};

// dispatch is a call back it has two arguments type and payload
// dispatch: ({type, payload}:TReducerActionProduct)=>void

export const getProduct =
  (payload: string) => async (dispatch: ({ type, payload }: TReducerActionProduct) => void) => {
    console.log('payload getProduct:', payload)
    try {
      dispatch({ type: types.PRODUCT_LOADING });
      let res: AxiosResponse = await axios.get(`/api/products?category=${payload}`);
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: types.PRODUCT_ERROR });
    }
  };

//Get Product by Id
export const getProductById =
  (payload: string) => async (dispatch: ({ type, payload }: TReducerActionProduct) => void) => {
    // console.log('payload Product ID :', payload)
    try {
      dispatch({ type: types.PRODUCT_LOADING });
      let res: AxiosResponse = await axios.get(`/api/products/${payload}`);
      // console.log("RES GET PRODUCT BY ID:", res.data);
      dispatch({ type: types.GET_PRODUCT_BY_ID_SUCCESS, payload: res.data });
    } catch (e) {
      // console.log("E Payload:", e)
      dispatch({ type: types.PRODUCT_ERROR });
    }
  };

