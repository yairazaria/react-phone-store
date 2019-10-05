import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../src/components/Navbar";
import ProductList from "../src/components/ProductList";
import Details from "../src/components/Details";
import Cart from "../src/components/Cart";
import Default from "../src/components/Default";
import Modal from "../src/components/Modal";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
