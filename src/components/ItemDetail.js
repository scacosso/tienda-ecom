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
                <div class="card m-5 p-5" >
            <div class="row no-gutters">
                <div class="col-sm-5" >
                    <img src={data.thumbnail} class="card-img-top" alt="producto"></img>
                </div>
                <div class="col-sm-7">
                <h4 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">Detalle de Producto</h4>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.tags}</p>
                        <h2 className="font-weight-lighter bg-success text-white rounded">${data.price}</h2>
                        <small>Stock: {data.sold_quantity}</small>
                        <ItemCount stock={data.sold_quantity} />
                    </div>
                </div>
            </div>
        </div>        
    </>
  );
}

export default ItemDetail;