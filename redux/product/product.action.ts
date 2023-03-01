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
  () =>
  async (dispatch: ({ type, payload }: TReducerActionProduct) => void) => {
    try {
      dispatch({ type: types.GET_PRODUCT_LOADING });
      let res: AxiosResponse = await axios.get(`/api/products`);
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: types.GET_PRODUCT_ERROR });
    }
  };

  