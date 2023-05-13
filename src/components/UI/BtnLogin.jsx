import React from "react";
import { useNavigate } from "react-router-dom";

const BtnLogin = () => {
  const nav = useNavigate();
  const onLoginHandler = () => {
    nav("login");
  };

  return (
    <button
      type="submit"
      className="rounded-md border-2 border-primary p-3 text-lg shadow-md
    transition-all hover:animate-text hover:bg-gradient-to-r hover:from-teal-500
    hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-xl 
    hover:font-black hover:text-transparent hover:shadow-lg"
      onClick={onLoginHandler}
    >
      Login
    </button>
  );
};

export default BtnLogin;
