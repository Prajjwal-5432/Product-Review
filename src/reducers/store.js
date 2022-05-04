import productReducer from "./productReducer"
import commentReducer from "./commentReducer"
import { combineReducers } from "redux"

export const reducers = combineReducers({
    products: productReducer,
    comments: commentReducer
})
