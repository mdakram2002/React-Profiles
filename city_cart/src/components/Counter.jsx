/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/Slice/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="bg-slate-600 text-2xl text-white py-1 px-2 rounded hover:bg-slate-900"
      >
        Increment
      </button>

      <br />
      <br />
      <div className="text-2xl">{count}</div>

      <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="bg-slate-600 text-2xl text-white py-1 px-2 rounded hover:bg-slate-900"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
