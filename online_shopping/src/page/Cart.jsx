/** @format */

import CartItems from "../components/CartItems";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const cart  = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="flex max-w-4xl mx-auto gap-20">
          {/* Data part of cart */}
          <div>
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          {/* <div className="flex h-[2px] w-full bg-slate-800"></div> */}

          {/* Summary part of the data and total amount */}
          <div className="flex flex-col gap-10 justify-between w-full">
            <div className="">
              <div className="font-medium mt-5">Your Cart</div>
              <div className="text-green-600 text-4xl font-bold">Summary</div>
              <p>
                <span className="font-medium">Total Items: {cart.length}</span>
              </p>
            </div>

            {/* total Amount section */}
            <div className="">
              <p className="text-black font-semibold mb-3">Total Amount: ${totalAmount}</p>
              <button className="bg-green-800 rounded-md p-2 text-lg px-5 w-full text-white font-semibold">Checkout Now</button>
            </div>
          </div>

        </div>
      ) : (
        /* if cart is empty */
        <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="font-medium mb-1">Cart is Empty</h1>
          <NavLink to={"/"}>
            <button className="bg-green-600 rounded-md p-1 px-8 text-xl text-white">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
