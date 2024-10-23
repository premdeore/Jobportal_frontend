import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import jobSlice from "./features/jobSlice";
const store = configureStore({
    reducer:{
        auth:authSlice,
        job:jobSlice
    }
});

export default store;