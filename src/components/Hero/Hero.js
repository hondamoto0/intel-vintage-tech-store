import React from "react";
import Wrapper from "./Hero.styles";
export default function Hero({ children }) {
  return (
    <Wrapper>
      <div className="hero">
        <div className="banner">
          <h1>Vintage Store</h1>
          <p>Laptop , Phone , Radio</p>
          {children}
          {/* children => cho những hero có Button */}
        </div>
      </div>
    </Wrapper>
  );
}
