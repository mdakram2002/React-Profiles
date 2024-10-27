/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/CartSlice";
// import CartReducer from "./reducer/CartReducer";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

