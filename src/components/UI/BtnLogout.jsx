import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Logout = () => {
  const authCtx = useContext(AuthContext);
  const onLogoutHandler = () => {
    authCtx.logout();
  };

  return (
    <button
      className="rounded-md border-2 border-primary p-3 text-lg shadow-md
        transition-all hover:animate-text hover:bg-gradient-to-r hover:from-teal-500
        hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-xl 
        hover:font-black hover:text-transparent hover:shadow-lg"
      onClick={onLogoutHandler}
    >
      Logout
    </button>
  );
};

export default Logout;
