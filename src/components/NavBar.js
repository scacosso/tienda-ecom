import React from 'react'
import CartWidget from './CartWidget';
import logo from '../images/stylestore_logo.png';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container m-3">
        <div className="col-3">
        <NavLink exact to="/"><img src={logo} className="w-100 h-auto pr-5 navbar-brand" alt="logo"/></NavLink>
        </div>
          
        <div className="btn-group col-5">
          <NavLink exact to="/" className="btn btn-danger" activeClassName="active">Inicio</NavLink>
          <NavLink to="/About" className="btn btn-danger" activeClassName="active">Sobre Nostros</NavLink>
          <NavLink to="/Login" className="btn btn-danger" activeClassName="active">Login</NavLink>
          <CartWidget></CartWidget>
        </div>
      </div>
    </nav>
    )
}
