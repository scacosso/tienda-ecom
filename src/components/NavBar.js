import React from 'react'
import CartWidget from './CartWidget';
import logo from '../images/stylestore_logo.png';


export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} className="w-25 h-auto pr-5" alt="logo"/>
         
      <div className="row justify-content-center align-items-center collapse navbar-collapse">
        <ul className="col navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </li>
          <li className="col nav-item">
            <div className="btn-group btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-primary">PANTALONES</button>
              <button type="button" className="btn btn-primary">CAMPERAS</button>
              <button type="button" className="btn btn-primary">CALZADOS</button>
            </div>
          </li>
          <li className="col nav-item input-group">
           
              <input className="form-control mr-sm-2 " type="text" placeholder="Buscar" aria-label="Search" />
              <span className="input-group-btn">
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Buscar</button>
              </span>
          </li>
          <li className="d-flex flex-wrap align-content-center border border-primary rounded-circle h-100 w-auto">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
    )
}
