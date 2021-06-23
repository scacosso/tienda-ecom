import React from "react";
import CartWidget from "./CartWidget";
import IdCategory from "./IdCategory";
import logo from "../images/stylestore_logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container m-3">
        <div className="col-3">
          <NavLink exact to="/">
            <img
              src={logo}
              className="w-100 h-auto pr-5 navbar-brand"
              alt="logo"
            />
          </NavLink>
        </div>

        <div
          className="btn-group col-5"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <NavLink
            exact
            to="/"
            className="btn btn-danger"
            activeClassName="active"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/About"
            className="btn btn-danger"
            activeClassName="active"
          >
            Sobre Nostros
          </NavLink>
          <div class="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              class="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorias
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <IdCategory />
            </div>
          </div>
          <NavLink
            to="/Login"
            className="btn btn-danger"
            activeClassName="active"
            id={props.id}
          >
            Login
          </NavLink>
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
