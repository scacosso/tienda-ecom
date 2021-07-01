import React, { useState } from "react";
import useCartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const CartDetail = () => {
  const { products, removeItem } =
    useCartContext();

  const handleRemove = (i) => {
    removeItem(i.id);
  };

  if (products.length === 0) {
    return (
      <div className="cart">
        <div className="heading cf">
          <h3>...No hay productos agregados al Carrito...</h3>
          <Link to="/" exact>
            <button className="continue">Continuar Comprando</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {products.map((item) => (
        <>
          <tr>
            <td>
              <img className="fotocart" src={item.img} alt={item.title} />
            </td>
            <td scope="row">
              <small>{item.id}</small>
            </td>
            <td className="w-25">{item.title}</td>
            <td>{item.quantity}</td>
            <td>$ {item.price * item.quantity}</td>
            <td>
              <button
                className="btn btn-sm btn-danger m-2"
                onClick={() => handleRemove(item)}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default CartDetail;
