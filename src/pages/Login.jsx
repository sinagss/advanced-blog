import LoginPanel from "../components/LoginPanel";
import loginImg from "../assets/undraw_login.svg";

const Login = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-secondary">
      <div className=" max-h-fit w-full max-w-md">
        <img src={loginImg} alt="login picture" className="" />
      </div>
      <div className="flex items-center justify-center bg-primaryLight drop-shadow-lg">
        <LoginPanel />
      </div>
    </div>
  );
};

export default Login;
