import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase/FirebaseConfig";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemListContainerFirebase = () => {
  const [item, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("sin resultados");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("Error search items", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(item.length);
  return (
    <div className="row container justify-content-center">
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Articulos onFiree!
      </h2>
      {item.length > 0 ? (
        item.map((data, index) => {
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
        <h3 className="col-12 text-center mt-5">
          <Spinner animation="border" variant="info" />
        </h3>
      )}
    </div>
  );

  // if (item.length > 0) {
  //   return (
  //     <>
  //       {item.map((producto, index) => {
  //         return <div>id={producto.id}</div>;
  //       })}
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>Hola</h1>
  //     </>
  //   );
  // }
};
export default ItemListContainerFirebase;