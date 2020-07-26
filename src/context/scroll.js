import React, { createContext, useState, useEffect } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [height, setHight] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHight(window.pageYOffset);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <ScrollContext.Provider value={{ height }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollProvider, ScrollContext };
