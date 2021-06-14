import React from 'react'
import CartWidget from './CartWidget';
import logo from '../images/stylestore_logo.png';


export default function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <img src={logo} className="w-25 h-auto pr-5 navbar-brand" alt="logo"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
         
      <div className="row justify-content-center align-items-center collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="col navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">HOME</a>
          </li>
          <li className="col nav-item">
            <div className="btn-group btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-danger">PANTALONES</button>
              <button type="button" className="btn btn-danger">CAMPERAS</button>
              <button type="button" className="btn btn-danger">CALZADOS</button>
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
