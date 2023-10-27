import { createSlice } from "@reduxjs/toolkit";

export const LoaderSlice = createSlice({
    name:"loaders",
    initialState: {
        loading:false,
    },
    reducers:{
        SetLoader:(state,action)=>{
            state.loading = action.payload;
        }
    }
});

export const {SetLoader} = LoaderSlice.actions;