import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
  const { IdProduct } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetch(`https://api.mercadolibre.com/items/${IdProduct}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    }, 50);
    return () => {
      clearTimeout(timeOut);
    };
  }, [props.onSelect]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        {data !== null ? (
          <ItemDetail
            id={data.id}
            title={data.title}
            description={`Esta prenda es una prenda ${data.title}. ${data.attributes[2].name} ${data.attributes[2].value_name}`}
            price={data.price}
            stock={data.available_quantity}
            img={data.pictures[0].url}
            btnText="Pagar"
          />
        ) : (
          <h3 className="text-center mt-5">
            <Spinner animation="border" variant="info" />
          </h3>
        )}
      </div>
    </div>
  );
}

export default ItemDetailContainer;
