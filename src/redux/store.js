import {createStore, combineReducers} from "react"
import { authReducer } from "./authReducer"

const rootReducer = combineReducers({
    auth: authReducer
});

export const store = createStore(rootReducer);
