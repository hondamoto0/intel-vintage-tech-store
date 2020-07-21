// user context
import React, { createContext, useState } from "react";

const UserContext = createContext();

const getUserFromLocalStorage = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
};
export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({
    show: false,
    message: "hello world",
    type: "success"
  });

  const showAlert = ({ message, type = "success" }) => {
    setAlert({ message, show: true, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const userLogin = user => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, showAlert, hideAlert, alert }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
