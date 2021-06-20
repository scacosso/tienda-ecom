import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IdProduct from "../components/IdProduct";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Carousel />
      <Switch>
        <div className="container">
          <div className="row justify-content-center">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
            <Route
              exact
              path="/Productos/detail/:IdProduct"
              component={ItemDetailContainer}
            >
              <IdProduct />
            </Route>
          </div>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}
