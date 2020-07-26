import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user";

const PublicRoute = ({ children, restrict, ...rest }) => {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        if (restrict && user.token) {
          return <Redirect to="/" />;
        }
        return children;
      }}
    />
  );
};

export default PublicRoute;
