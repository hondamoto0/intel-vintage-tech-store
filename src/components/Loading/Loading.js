import React from "react";
// Loading gif
import loading from "../../assets/preloader.gif";
// styled-components
import Wrapper from "./Loading.styles";

export default function Loading() {
  return (
    <Wrapper>
      <div className="loading">
        <h2>loading...</h2>
        <img src={loading} alt="loading gif" />
      </div>
    </Wrapper>
  );
}
