import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import { Spinner } from "react-bootstrap";

export default function IdProduct(props) {
  const { IdProduct } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetch(`https://api.mercadolibre.com/items/${IdProduct}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    }, 500);
    return () => {
      clearTimeout(timeOut);
      
    };
  }, [props.onSelect]);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {data !== null ? (
          <ItemDetailContainer />
        ) : (
          <h3 className="text-center mt-5">
            <Spinner animation="border" variant="info" />
          </h3>
        )}
      </div>
    </div>
  );
}
