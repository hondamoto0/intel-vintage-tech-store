import React, { useContext } from "react";
// Context API
import { CartContext } from "../../context/cart";
import { UserContext } from "../../context/user";
// Components
import { EmptyCart, CartItem } from "../../components/Cart";
// react-router-dom
import { Link } from "react-router-dom";
// styled-components
import Wrapper from "./Cart.styles";
export default function Cart() {
  const { user } = useContext(UserContext);
  const { cart, total } = useContext(CartContext);
  if (cart.length === 0) {
    return <EmptyCart />; // return Empty nếu Cart ko có item
  }
  return (
    <Wrapper>
      <div className="cart-items section">
        <h2>your cart</h2>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>total : $ {total}</h2>
        {user.token ? (
          <Link to="/checkout" className="btn btn-primary btn-block">
            checkout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary btn-block">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
}
