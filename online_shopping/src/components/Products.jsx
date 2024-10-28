/** @format */
import toast from "react-hot-toast";
import React from "react";
import { add, remove } from "../redux/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ post }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed");
  };

  return (
    <div
      className="flex flex-col items-center justify-between hover:scale-110 transition
    duration-300 ease-in shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]
    gap-3 p-4 mt-10  ml-5  rounded-xl"
    >
      {/* titel section */}
      <div>
        <p className="text-gray-600 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>

      {/* description section  */}
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      {/* image section  */}
      <div className="h-[180px]">
        <img src={post.image} alt="imge" className="h-full w-full" />
      </div>

      {/* price of post section  */}
      <div className="flex justify-between gap-7 items-center w-full mt-1">
        <div>
          <p className="text-green-600 font-semibold "> ${post.price}</p>
        </div>

        {/* add and remove button sections  */}
        {cart.some((p) => p.id === post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[8px] p-1 px-3 uppercase
          hover:bg-gray-700 hover:text-white transition
           first-line:duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[8px] p-1 px-3 uppercase
           hover:bg-gray-700 hover:text-white transition
            duration-300 ease-in"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
