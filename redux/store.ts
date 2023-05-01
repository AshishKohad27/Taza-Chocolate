import {
  combineReducers,
  applyMiddleware,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/product.reducer";
import { userReducer } from "./auth/auth.reduce";
import { cartReducer } from "./cart/cart.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  auth: userReducer,
  cart: cartReducer
});

// compose
// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
// const createCompose: any =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
