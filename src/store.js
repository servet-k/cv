import { configureStore } from "@reduxjs/toolkit";
import addressReducer from "./features/addressSlice";
import summaryReducer from "./features/summarySlice";
import educationSlice from "./features/educationSlice";
import experienceSlice from "./features/experienceSlice";

export const store=configureStore({

    reducer:{
        info: addressReducer,
        summary:summaryReducer,
        education:educationSlice,
        experience:experienceSlice,
    }
})
