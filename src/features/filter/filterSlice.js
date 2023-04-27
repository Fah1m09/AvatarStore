import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sort: "default",
    content: "PC",
    autoUploadSupport: "All",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        sort: (state, action) => {
            state.sort = action.payload
        },
        content: (state, action) => {
            state.content = action.payload
        },
        autoUploadSupport: (state, action) => {
            state.autoUploadSupport = action.payload
        },
         
    },
});

export default filterSlice.reducer;
export const { sort, content, autoUploadSupport } = filterSlice.actions;
