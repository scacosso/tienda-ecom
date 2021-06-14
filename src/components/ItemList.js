import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"

function ItemList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=CHUVAROPA&limit=12")
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);
  return (
    <>
    <h1 className="justify-content-center min-vw-100 p-3 m-5 bg-dark text-white shadow-sm">Articulos Destacados</h1>
      {data !== null ? (
        
        data.map((data, index) => {
            return <div className="col-10 col-md-3 m-2 ">  
            <div className="card shadow-lg">
            <div>
                <img className="picture" src={data.thumbnail} alt="Campera Adidas"></img>
            </div>
            <div className="card-body">
                <div className="title">
                <h5 className="card-title">{data.title}</h5>
                </div>
                <h6 className="font-weight-lighter">${data.price}</h6>
            
            <small>Stock: {data.sold_quantity}</small>
            <ItemCount stock={data.sold_quantity} />
            
            </div>
        </div>
        </div>
        })
      ) : (
        <h3>Cargada</h3>
      )}
    </>
  );
}

export default ItemList;