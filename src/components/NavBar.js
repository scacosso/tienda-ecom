import React from "react";
import CartWidget from "./CartWidget";
import IdCategory from "./IdCategory";
import logo from "../images/stylestore_logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav className="col-12 navbar navbar-expand-lg navbar-light bg-light">
      <div className="container align-items-center justify-content-start">
        <div className="col-3">
          <NavLink exact to="/">
            <img src={logo} className="w-100 h-auto navbar-brand" alt="logo" />
          </NavLink>
        </div>

        <div
          className="btn-group col-4 align-items-center"
          role="group"
          aria-label="Button group with nested dropdown"
        >
          <NavLink
            exact
            to="/"
            className="btn btn-danger"
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="btn btn-danger"
            activeClassName="active"
          >
            About
          </NavLink>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Category
            </button>
            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
              <IdCategory />
            </div>
          </div>
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}
