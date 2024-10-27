/** @format */
import toast from "react-hot-toast";
import React from "react";
import {add, remove} from "../redux/slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";



const Products = ({post}) => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () =>{
    dispatch(remove(post.id));
    toast.success("Item removed from cart");
  }

  return (
    <div>
      {/* titel section */}
      <div>
        <p>{post.title}</p>
      </div>

      {/* description section  */}
      <div>{post.description}</div>

      {/* image section  */}
      <div>
        <img src={post.image} alt="imge" />
      </div>

      {/* price of post section  */}
      <div>
        <p> {post.price}</p>
      </div>

      {/* add and remove button sections  */}
      {
        cart.some((p) => p.id === post.id) ?
        (<button
          onClick={removeFromCart}
        >
          Remove Item
        </button>)
        :
        (<button
          onClick={addToCart}
        >
          Add to Cart
        </button>)
      }
    </div>
  );
};

export default Products;
