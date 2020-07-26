import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// Context API
import { ProductProvider } from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";
import { ScrollProvider } from "./context/scroll";
ReactDOM.render(
  <UserProvider>
    <ScrollProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </ScrollProvider>
  </UserProvider>,
  document.getElementById("root")
);
