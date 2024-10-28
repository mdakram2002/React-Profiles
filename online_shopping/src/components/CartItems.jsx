/** @format */
import { MdDelete } from "react-icons/md";
import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { remove } from "../redux/slice/CartSlice";

const CartItems = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Removed item from cart");
  };
  return (
    <div className="flex max-w-4xl mx-auto ">
      <div className="flex items-center gap-4">
        <div className="h-[170px] w-[140px] ml-2 mb-6 mt-5">
          <img src={item.image} alt="imge" className="h-full w-full" />
        </div>

        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title.split(" ").slice(0, 5).join(" ") + "..."}
          </h1>
          <h1 className="w-40 text-gray-700 font-normal text-[10px] text-left mt-3 mb-5">
            {" "}
            {item.description.split(" ").slice(0, 12).join(" ") + "..."}
          </h1>
          <div className="flex w-full gap-5 justify-between items-center">
            <p className="text-green-600 font-semibold mt-3 mb-5">
              ${item.price}
            </p>

            <div onClick={removeFromCart}>
              <MdDelete className=" bg-red-200 rounded-full w-6 h-6 cursor-pointer items-center mt-3 mb-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
