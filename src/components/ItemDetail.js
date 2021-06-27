import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cant) => {
    setCantidad(cant);
    console.log(cant);
  };
  console.log(cantidad);
  return (
    <div className="col-8">
      <div className="row bg-white m-3 p-3 rounded shadow align-items-center">
        <div className="col-12 col-md-5 d-flex flex-column ">
          <img className="" src={props.img} alt={props.title} />
          <div className="d-flex justify-content-around"></div>
        </div>
        <div className="col-6">
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
                <ItemCount stock={props.stock} onClick={onAdd} />
                <Link to={`/`}>
                  <button className="btn btn-sm btn-primary m-2">
                    {" "}
                    Volver
                  </button>
                </Link>
              </>
            ) : (
              <>
                <ItemCount stock={props.stock} onClick={onAdd} />
                <button className="btn btn-sm btn-success m-2">Comprar</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
