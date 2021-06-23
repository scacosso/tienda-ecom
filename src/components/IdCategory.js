import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IdCategory() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?nickname=CHUVAROPA")
      .then((res) => res.json())
      .then((res) => {
        setData(res.available_filters[0].values);
      });
  }, []);
  return (
    <>
      {data !== null ? (
        data.map((data, index) => {
          return (
            <>
              <Link to={`/Productos/category/${data.id}`} class="dropdown-item">
                {data.name}
              </Link>
            </>
          );
        })
      ) : (
        <h3>Cargada</h3>
      )}
    </>
  );
}
