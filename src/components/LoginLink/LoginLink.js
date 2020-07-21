import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// Context Api
import { UserContext } from "../../context/user";
import { CartContext } from "../../context//cart";
// styled-components
import WrapperButton from "./LoginLink.styles";
export default function LoginLink() {
  const { user, userLogout } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  if (user.token) {
    return (
      <WrapperButton
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        logout
      </WrapperButton>
    );
  }
  return <Link to="/login">login</Link>;
}
