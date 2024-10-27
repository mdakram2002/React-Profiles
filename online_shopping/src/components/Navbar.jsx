/** @format */

import React from "react";
import image from "../assets/nav.png";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 w-screen h-[50px]">
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img
              className="h-[40px] w-[80px] text-white items-center justify-center mt-[7px]"
              src={image}
              alt="imag"
            />
          </div>
        </NavLink>
        <div className="flex flex-wrap items-center justify-center mt-[2px] gap-x-4">
          <NavLink
            to="/"
          >
            <p className="text-white font-semibold">Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaCartPlus className="text-green-700 justify-center text-2xl" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
