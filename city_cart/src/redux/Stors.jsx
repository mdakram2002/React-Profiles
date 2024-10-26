/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Slice/Counter";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
    