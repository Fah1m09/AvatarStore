import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import filterReducer from "../features/filter/filterSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        filter: filterReducer,
        cart: cartReducer
    },
});
