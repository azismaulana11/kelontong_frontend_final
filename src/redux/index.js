import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./product/productSlicer";

const store = configureStore({
    reducer: {
import loginReducer from './User/LoginSlicer'

const store = configureStore({
    reducer: {
        login: loginReducer,
        product: productSlice,
    },
});

export default store;
