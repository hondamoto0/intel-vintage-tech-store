import React from "react";
// Components
import Loading from "../components/Loading/Loading";

const withLoading = WrapperComponent => {
  return ({ isLoading, ...otherProps }) => {
    if (isLoading) {
      return <Loading />;
    }
    return <WrapperComponent {...otherProps} />;
  };
};
export default withLoading;
