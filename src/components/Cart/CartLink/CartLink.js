import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Context Api
import { CartContext } from "../../../context/cart";
// styled-components
import Wrapper from "./CartLink.styles";
export default function CartLink() {
  const { cartItems } = useContext(CartContext);
  return (
    <Wrapper>
      <div className="cart-link-container">
        <Link to="/cart">cart</Link>
        <span className="cart-link-total">{cartItems}</span>
      </div>
    </Wrapper>
  );
}
