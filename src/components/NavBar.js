import React from 'react'
import logo from './stylestore_logo.png';
import cart from './cart.svg';

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
            <div class="btn-group btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">PANTALONES</button>
              <button type="button" class="btn btn-primary">CAMPERAS</button>
              <button type="button" class="btn btn-primary">CALZADOS</button>
            </div>
          </li>
          <li className="col nav-item input-group">
           
              <input className="form-control mr-sm-2 " type="text" placeholder="Buscar" aria-label="Search" />
              <span className="input-group-btn">
                <button className="btn btn-outline-success my-2 my-sm-0" type="button">Buscar</button>
              </span>
          </li>
          <li>
            <img src={cart} className="col bg-primary rounded-lg h-100" alt="logo"/>
          </li>
        </ul>
      </div>
    </nav>
    )
}
