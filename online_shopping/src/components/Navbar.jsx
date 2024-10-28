/** @format */

import React from "react";
import image from "../assets/nav.png";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <nav className="flex justify-between items-center h-[55px] max-w-4xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img className="h-[52px] mt-[2px] " src={image} alt="imag" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p className="text-white font-semibold">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative -mr-3">
              <FaCartPlus className="text-green-100 justify-center text-2xl"/>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-xs w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
