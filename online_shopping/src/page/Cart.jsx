/** @format */
import CartItems from "../components/CartItems";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
    {
      cart.length > 0 ?

      (
        <div>
          {/* Data part of cart  */}
          <div>
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Summary part of the data  and total amount*/}
          <div>
            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            {/* total Amount section  */}
            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      )

      :

      {/* if cart is empty */}
      (
        (
          <div>
            <h1>Cart is Empty</h1>
            <NavLink to={"/"}>
              <button>Shop Now</button>
            </NavLink>
          </div>
        )
      )

    }
    </div>
  );
};

export default Cart;
