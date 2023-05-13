import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logout from "../components/UI/BtnLogout";
import BtnLogin from "../components/UI/BtnLogin";

const Home = () => {
  const authCtx = useContext(AuthContext);

  const welcomeUser = (
    <div className="flex flex-col items-center gap-5 text-center">
      <h1 className="text-5xl">
        Welcom back
        <span
          className="animate-text bg-gradient-to-r from-teal-500 
        via-purple-500 to-orange-500 bg-clip-text font-cursive text-6xl 
        font-black text-transparent"
        >
          {" "}
          {authCtx.username}
        </span>
      </h1>
      <Logout />
    </div>
  );

  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center gap-3 bg-primary p-5">
      <h1 className="text-4xl">
        <span
          className="animate-text bg-gradient-to-r from-teal-500 
        via-purple-500 to-orange-500 bg-clip-text font-cursive text-7xl 
        font-black text-transparent"
        >
          W
        </span>
        elcome to my Simple blog
      </h1>
      {authCtx.loggedIn ? welcomeUser : ""}
      {!authCtx.loggedIn ? <BtnLogin /> : ""}
    </div>
  );
};

export default Home;
