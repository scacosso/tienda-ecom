import React, { useState } from "react";
import useCartContext from "../context/CartContext";
import { Link } from "react-router-dom";
import CartDetail from "./CartDetail";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../firebase/FirebaseConfig";
import Formulario from "./Formulario";

const Cart = () => {
  const { products, totalProductsPrice, cleanListCart, clearCart } =
    useCartContext();
  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleFinalize = () => {
    setShowForm(true);
  };

  const createOrder = (buyer) => {
    const db = getFirestore();
    const orders = db.collection("order");

    const newOrder = {
      buyer,
      products,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalProductsPrice(),
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setConfirmation(true);
      })
      .catch((e) => {
        console.log(e);
      });

    const Itemscollection = db.collection("ItemCollection");
    const batch = getFirestore().batch();

    products.forEach((p) => {
      batch.update(Itemscollection.doc(p.id), { stock: p.stock - p.quantity });
    });
    batch
      .commit()
      .then(() => {
        console.log("Termino bien");
        cleanListCart();
      })
      .catch((err) => console.log(err));
  };

  if (products.length === 0 && orderId === "") {
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
  } else if (orderId && confirmation) {
    return (
      <div className="card m-5 p-5">
        <div>
          <h3>
            Su Codigo de Pedido: <br/><span className="text-white-50 bg-success m-2">{orderId}</span> <br/> ha sido
            confirmado
          </h3>
          
          <Link to="/" exact>
            <button className="btn btn-primary m-3">Continuar Comprando</button>
          </Link>
        </div>
      </div>
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
                <button
                  className="btn btn-sm btn-danger m-2"
                  onClick={clearCart}
                >
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
          <button
            className="btn btn-sm btn-success m-2"
            onClick={handleFinalize}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
      {showForm ? <Formulario createOrder={createOrder} /> : null}
    </>
  );
};
export default Cart;
