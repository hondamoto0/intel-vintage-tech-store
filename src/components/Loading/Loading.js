import React from "react";
// Loading gif
import loading from "../../assets/loading.gif";
// styled-components
import Wrapper from "./Loading.styles";

export default function Loading() {
  return (
    <Wrapper>
      <div className="loading">
        <img src={loading} alt="loading gif" />
      </div>
    </Wrapper>
  );
}
