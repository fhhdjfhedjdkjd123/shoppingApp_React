import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiReducer";
import cartSlice from "./cartReducer";

const store=configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSlice.reducer
    }
});

export default store;