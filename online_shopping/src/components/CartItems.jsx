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
    <div>
      <div>
        <div>
          <img src={CartItems.image} alt="imge" />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>

            <div onClick={removeFromCart}>
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
