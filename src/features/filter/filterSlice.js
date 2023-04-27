import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: "All",
    content: "All",
    autoUploadSupport: "All",
    price: "All",
    polygonAmount: "All",
    category: "All",
    search: ""
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        sort: (state, action) => {
            state.sort = action.payload
        },
        content: (state, action) => {
            state.content = action.payload
        },
        price: (state, action) => {
            state.price = action.payload
        },
        polygonAmount: (state, action) => {
            state.polygonAmount = action.payload
        },
        category: (state, action) => {
            state.category = action.payload
        },
        autoUploadSupport: (state, action) => {
            state.autoUploadSupport = action.payload
        },
         
    },
});

export default filterSlice.reducer;
export const {  setSearch, sort, content, price, polygonAmount, category, autoUploadSupport } = filterSlice.actions;
