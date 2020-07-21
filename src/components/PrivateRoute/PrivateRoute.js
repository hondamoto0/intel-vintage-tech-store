import React, { useContext } from "react";
// react-router-dom
import { Route, Redirect } from "react-router-dom";
// Context Api
import { UserContext } from "../../context/user";
export default function PrivateRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={() => {
        return user.token ? children : <Redirect to="/login" />;
      }}
    />
  );
}
