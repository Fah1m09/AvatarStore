import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    items: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.product.findIndex(
              (product) => product.id === productToAdd.id
            );
            if (existingProductIndex !== -1) {
              const updatedProducts = [...state.product];
              return {
                ...state,
                product: updatedProducts,
                total: state.total + productToAdd.price,
                items: state.items + 1 
              };
            } else {
              return {
                ...state,
                product: [...state.product, productToAdd],
                total: state.total + productToAdd.price,
                items: state.items + 1 
              };
            }
        },
        removeFromCart: (state, action) => {
            const index = state.product.findIndex(
                (product) => product.id === action.payload
              );
              if (index !== -1) {
                return {
                  ...state,
                  product: [
                    ...state.product.slice(0, index),
                    ...state.product.slice(index + 1),
                  ],
                  total:
                    state.total -
                    state.product[index].price,
                    items: state.items - 1
                };
              }
              return state;
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
