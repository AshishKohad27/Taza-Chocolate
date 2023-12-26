import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";

import thunk from "redux-thunk";
import { userReducer } from "./auth/auth-reducer";

const rootReducer = combineReducers({
    auth: userReducer,
});

// compose
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const createCompose: any =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    createCompose(applyMiddleware(thunk as any))
);
