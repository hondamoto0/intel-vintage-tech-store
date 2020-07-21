import React from "react";
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  ProductDetails,
  Products
} from "./pages";
//components
import { Header, Alert, PrivateRoute } from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Alert />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <PrivateRoute path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
