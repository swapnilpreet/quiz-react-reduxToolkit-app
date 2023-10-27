import { configureStore } from "@reduxjs/toolkit";
import { LoaderSlice } from "./LoaderSlice";
import { QuizSlice } from "./QuizSlice";



const store = configureStore({
    reducer:{
        quiz:QuizSlice.reducer,
        loaders:LoaderSlice.reducer,
    }
})

export default store;