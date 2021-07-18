import React, { useEffect, useState } from "react";
import { getFirestore } from "../firebase/FirebaseConfig";
import { Spinner } from "react-bootstrap";

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

  return (
    <div className="row container justify-content-center">
      <h2 className="justify-content-center col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Proximamente Articulos onFire!
      </h2>
      {item.length > 0 ? (
        item.map((data, index) => {
          return (
            <div key={data.id} className="col-10 col-md-3 pb-5">
              <div className="card shadow-lg">
                <div>
                  <img
                    className="picture"
                    src={data.thumbnail}
                    alt={data.title}
                  ></img>
                </div>
                <div className="card-body">
                  <div>
                    <h5 className="card-title">{data.title}</h5>
                  </div>
                  <h6 className="font-weight-lighter">${data.price}</h6>
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
};
export default ItemListContainerFirebase;
