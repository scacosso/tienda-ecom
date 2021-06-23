import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

export default function ItemCategoryContainer() {
  const { IdCategory } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetch(
        `https://api.mercadolibre.com/sites/MLA/search?nickname=CHUVAROPA&category=${IdCategory}`
      )
        .then((res) => res.json())
        .then((res) => {
          setData(res.results);
        });
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <>
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Categoria {IdCategory}
      </h2>
      {data !== null ? (
        data.map((data, index) => {
          return (
            <div className="col-10 col-md-3 pt-5">
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
                  <h4 className="font-weight-lighter font-weight-bold text-success">${data.price}</h4>

                  <Link
                    to={`/productos/detail/${data.id}`}
                    className="col-12 m-2"
                  >
                    <button
                      id={data.id}
                      stock={data.available_quantity}
                      Cat={IdCategory}
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
    </>
  );
}
