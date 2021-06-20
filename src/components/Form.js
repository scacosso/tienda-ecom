import React from "react";

export default function Login() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Direccion de e-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text small">
         No compartiremos su correo electrónico con nadie.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" >
          Recordarme
        </label>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}
