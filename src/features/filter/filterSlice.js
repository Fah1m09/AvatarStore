import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: "All",
    category: "All",
    search: "",
    content: [],
    autoUploadSupport: [],
    price: [],
    polygonAmount: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        sortByFilter: (state, action) => {
            state.sort = action.payload
        },
        category: (state, action) => {
          state.category = action.payload
      },
        content: (state, action) => {
            const contentToAdd = action.payload;
            const index = state.content.findIndex(
              (product) => product === contentToAdd
            );
          
            if (index !== -1) {
              return {
                ...state,
                content: [
                  ...state.content.slice(0, index),
                  ...state.content.slice(index + 1),
                ],
              };
            } else {
              return {
                ...state,
                content: [...state.content, contentToAdd],
              };
            }
        },
        price: (state, action) => {
            const priceToAdd = action.payload;
            const index = state.price.findIndex(
              (product) => product === priceToAdd
            );
          
            if (index !== -1) {
              return {
                ...state,
                price: [
                  ...state.price.slice(0, index),
                  ...state.price.slice(index + 1),
                ],
              };
            } else {
              return {
                ...state,
                price: [...state.price, priceToAdd],
              };
            }
        },
        polygonAmount: (state, action) => {
            const polyToAdd = action.payload;
            const index = state.polygonAmount.findIndex(
              (product) => product === polyToAdd
            );
          
            if (index !== -1) {
              return {
                ...state,
                polygonAmount: [
                  ...state.polygonAmount.slice(0, index),
                  ...state.polygonAmount.slice(index + 1),
                ],
              };
            } else {
              return {
                ...state,
                polygonAmount: [...state.polygonAmount, polyToAdd],
              };
            }
        },
        autoUploadSupport: (state, action) => {
            const uploadToAdd = action.payload;
            const index = state.autoUploadSupport.findIndex(
              (product) => product === uploadToAdd
            );
          
            if (index !== -1) {
              return {
                ...state,
                autoUploadSupport: [
                  ...state.autoUploadSupport.slice(0, index),
                  ...state.autoUploadSupport.slice(index + 1),
                ],
              };
            } else {
              return {
                ...state,
                autoUploadSupport: [...state.autoUploadSupport, uploadToAdd],
              };
            }
        },
         
    },
});

export default filterSlice.reducer;
export const {  setSearch, sortByFilter, content, price, polygonAmount, category, autoUploadSupport } = filterSlice.actions;
