import React, { useState } from "react";
import useCartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";

const Cart = () => {
  const { products, totalProductsPrice, clearCart } = useCartContext();

  if (products.length === 0) {
    return (
      <>
        <h3 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
          ...No hay productos agregados al Carrito...
        </h3>
        <Link to="/" exact>
          <button className="btn btn-lg btn-primary m-5">
            Continuar Comprando
          </button>
        </Link>
      </>
    );
  }
  return (
    <>
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Carrito de Compra
      </h2>

      <div className="card p-5">
        <table class="table table-hover table-responsive">
          <thead class="thead-dark">
            <tr>
              <th>Foto</th>
              <th>Id</th>
              <th>Titulo</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <CartDetail />
            <tr className="bg-dark text-white">
              <td className="font-weight-bold"> Total a Pagar </td>
              <td></td>
              <td></td>
              <td></td>
              <td className="font-weight-bold">$ {totalProductsPrice()}</td>
              <td>
                <button className="btn btn-sm btn-danger m-2" onClick={ clearCart } >
                  Borrar todos
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="totals-item">
          <Link to="/" exact>
            <button className="btn btn-sm btn-primary m-5">
              Continuar Comprando
            </button>
          </Link>
          <button className="btn btn-sm btn-success m-2">
            Finalizar Compra
          </button>
        </div>
      </div>
    </>
  );
};
export default Cart;
