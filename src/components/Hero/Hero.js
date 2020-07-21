import React from "react";
import Wrapper from "./Hero.styles";
export default function Hero({ children }) {
  return (
    <Wrapper>
      <div className="hero">
        <div className="banner">
          <h1>think,code,deploy</h1>
          <p>embrace your choices - we do</p>
          {children}
          {/* children => cho những hero có Button */}
        </div>
      </div>
    </Wrapper>
  );
}
