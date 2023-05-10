import React, { useState } from "react";
import { setItem, removeItem, getItem } from "../hooks/useLocalStorage";

const AuthProvider = (children) => {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  

  return <div>AuthProvider</div>;
};

export default AuthProvider;
