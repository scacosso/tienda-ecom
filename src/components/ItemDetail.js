import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function ItemDetail(props) {
  return (
    <div className="col-8">
      <div className="row bg-white m-3 p-3 rounded shadow">
        <div className="col-12 col-md-5 d-flex flex-column">
          <img className="" src={props.img} alt={props.title} />
          <div className="d-flex justify-content-around">
            <Link to={`/`}>
              <button className="btn btn-primary"> Volver</button>
            </Link>
          </div>
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
            <ItemCount stock={props.stock} />
          </div>
        </div>
      </div>
    </div>
  );
}
