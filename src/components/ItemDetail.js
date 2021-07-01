import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import useCartContext from "../context/CartContext";

export default function ItemDetail(props) {
  const [cantidad, setCantidad] = useState(0);
  const { addItem, isInCart } = useCartContext();

  const onAdd = (cant) => {
    setCantidad(props.id, cant);
    addItem(props.id, props.title, props.img, props.price, cant);
  };

  return (
    <div className="col-12 col-md-10 col-lg-10">
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Detalle de Articulo
      </h2>
      <div className="row bg-white m-3 p-3 rounded shadow align-items-center justify-content-center">
        <div className="col-8 col-md-5 d-flex flex-column ">
          <img className="" src={props.img} alt={props.title} />
          <div className="d-flex justify-content-around"></div>
        </div>
        <div className="col-12 col-md-6">
          <h5 className="mt-5">{props.title}</h5>
          <p className="p-3 border-bottom border-top text-secondary description">
            {props.description}
          </p>
          <div className="d-flex justify-content-around">
            <h5 className="text-success text-center">
              <span className="text-dark">Precio $ </span>
              {props.price}
            </h5>
          </div>
          <div>
            {cantidad === 0 ? (
              <>
                <ItemCount stock={props.stock} onAdd={onAdd} />
                <Link to={`/`}>
                  <button className="btn btn-sm btn-primary m-2">Volver</button>
                </Link>
              </>
            ) : (
              <>
                <ItemCount stock={props.stock} onAdd={onAdd} />
                <Link to={`/cart`}>
                  <button className="btn btn-sm btn-success m-2">
                    Finalizar Comprar
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
