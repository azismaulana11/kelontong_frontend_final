import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./product/productSlicer";


const store = configureStore({
    reducer: {
        product: productSlice,
    },
});

export default store;
