/** @format */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// destructuring
// fetch the implimentation of increment and decrement from the couterSlice.actions
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;
