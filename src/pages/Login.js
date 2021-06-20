import React from "react";
import Form from "../components/Form";

function login() {
  return (
    <>
      <h2 className="col-10 m-5 p-3 bg-dark rounded-lg text-white shadow-sm">
        Iniciar Sesion
      </h2>
      <div className="card p-5 col-8">
        <Form />
      </div>
    </>
  );
}

export default login;
