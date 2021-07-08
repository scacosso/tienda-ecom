import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ItemList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.mercadolibre.com/sites/MLA/search?nickname=CHUVAROPA&offset=25&limit=12"
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      });
  }, []);
  
  return (
    <div className="row container justify-content-center">
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Articulos Destacados
      </h2>
      {data !== null ? (
        data.map((data, index) => {
          return (
            <div className="col-10 col-md-3 pb-5">
              <div className="card shadow-lg">
                <div>
                  <img
                    className="picture"
                    src={data.thumbnail}
                    alt={data.title}
                  ></img>
                </div>
                <div className="card-body">
                  <div className="title">
                    <h5 className="card-title">{data.title}</h5>
                  </div>
                  <h6 className="font-weight-lighter">${data.price}</h6>

                  <Link
                    to={`/productos/detail/${data.id}`}
                    className="col-12 m-2"
                  >
                    <button
                      key={index}
                      id={data.id}
                      stock={data.available_quantity}
                      className=" w-50 btn btn-secondary rounded-lg text-center"
                    >
                      Ver
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="text-center mt-5">
          <Spinner animation="border" variant="info" />
        </h3>
      )}
    </div>
  );
}
