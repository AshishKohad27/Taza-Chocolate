import {
  combineReducers,
  applyMiddleware,
  legacy_createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./product/product.reducer";

const rootReducer = combineReducers({
  product: productReducer,
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
