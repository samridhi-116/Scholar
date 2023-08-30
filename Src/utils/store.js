import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import jobUpdateSlice from "./jobUpdateSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        jobs: jobUpdateSlice
    }

})

export default store;