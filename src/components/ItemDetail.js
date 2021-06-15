import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

function ItemDetail() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/items/MLA825946604")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <>
        {data !== null ? (
        <div className="card m-5 p-5" >
            <div className="row no-gutters">
                <div className="col-sm-5" >
                    <img src={data.thumbnail} className="card-img-top" alt="producto"></img>
                </div>
                <div className="col-sm-7">
                <h4 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">Detalle de Producto</h4>
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.tags}</p>
                        <h2 className="font-weight-lighter bg-success text-white rounded">${data.price}</h2>
                        <small>Stock: {data.sold_quantity}</small>
                        <ItemCount stock={data.sold_quantity} />
                    </div>
                </div>
            </div>
        </div> ) : (
        <h3>Cargada</h3>
      )}      
    </>
  );
}

export default ItemDetail;