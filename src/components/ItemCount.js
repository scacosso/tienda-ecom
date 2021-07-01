import React, { useState } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";
import cart from "../images/cart.svg";

export default function ItemCount(props) {
  const stock = props.stock;
  const [clicks, setClicks] = useState(1);

  function restar(event) {
    if (clicks > 1) {
      setClicks(clicks - 1);
    }
  }

  function aumentar(event) {
    if (clicks < stock) setClicks(clicks + 1);
  }

  function addToCart() {
    props.onAdd(clicks);
    if (clicks >= 1) {
      if (typeof window !== "undefined") {
        injectStyle();
      }
      toast(<div>✔️Agregaste {clicks} item al carrito</div>);
    } else {
      alert(`Se tiene que agregar al menos un producto.`);
    }
  }

  return (
    <>
      <div className="row justify-content-center">
        <button
          className="col-3 m-1 btn border border-danger rounded-lg"
          onClick={restar}
        >
          -
        </button>
        <span className="col-3 m-1 border border-secondary rounded-lg">
          {clicks}
        </span>
        <button
          className="col-3 m-1 btn border border-success rounded-lg"
          onClick={aumentar}
        >
          +
        </button>
      </div>
      <small>Stock: {stock}</small>
      <div>
        <button
          className="col-10 m-1 btn border border-primary rounded-lg"
          onClick={addToCart}
          id={props.id}
        >
          Add to Cart <img src={cart} alt="logo" />
        </button>
      </div>
    </>
  );
}
