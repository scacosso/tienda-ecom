import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Category from "../pages/Category";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Cart from "../components/Cart";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Carousel className="bg-dark" />
      <div className="container">
        <div className="row justify-content-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route
              exact
              path="/Productos/detail/:IdProduct"
              component={ItemDetailContainer}
            />
            <Route
              exact
              path="/Productos/category/:IdCategory"
              component={Category}
            />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
