import React, { useContext } from "react";
// react-router-dom
import { Link } from "react-router-dom";
// images from assets folder
import logo from "../../assets/logo.svg";
// styled-components
import Wrapper from "./header.styles";
// components
import { LoginLink } from "../";
import { CartLink } from "../Cart";
// Context Api
import { UserContext } from "../../context/user";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <Wrapper>
      <div className="header">
        <img src={logo} alt="tech logo" className="logo" />
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/" className="linkRoute">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="linkRoute">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="linkRoute">
                  Products
                </Link>
              </li>
              {user.token && (
                <li>
                  <Link to="/checkout" className="linkRoute">
                    checkout
                  </Link>
                </li>
              )}
            </div>
            <div>
              <li>
                <LoginLink />
              </li>
              <CartLink />
            </div>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
}
