import React, { useState } from "react";
import { setItem, removeItem, getItem } from "../hooks/useLocalStorage";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isLogedIn, setIsLoggedIn] = useState(
    getItem("logedIn") ? true : false
  );

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
