import React from "react";
import About from "../pages/About";
import Login from "../pages/Login";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TT from "../components/IdProduct";

export default function AppRouter(props) {
  return (
    <Router>
      <NavBar />
      <Carousel />
      <Switch>
        <div className="container">
          <div className="row">
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/About" component={About} />
            <Route path="/Login" component={Login} />
            <Route
              exact
              path="/Productos/detail/:IdProduct"
              component={ItemDetailContainer}
            >
              <TT />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}
