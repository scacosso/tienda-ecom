import React from "react";
import useCartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import cart from "../images/cart.svg";

const CartWidget = () => {
  const { cartWidgetCount } = useCartContext();

  return (
    <>
      <Link to={"/cart"}>
        <div className="p-2">
        <span className="CartWidgetCount">{cartWidgetCount()}</span>
          <img src={cart}  alt="logo" />
          
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
