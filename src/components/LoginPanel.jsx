import { Button, Checkbox, Form, Input } from "antd";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import storageKeys from "../constants/storageKeys";
import BtnLogin from "./UI/BtnLogin";

const LoginPanel = () => {
  const { getItem } = useLocalStorage();
  const navToHome = useNavigate();
  const authCtx = useContext(AuthContext);

  const onFinish = (values) => {
    authCtx.login(values.username, values.password);
    if (getItem(storageKeys.isLogedin)) {
      navToHome("/");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      className="rounded-xl p-5"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <button
          className="rounded-md border-2 border-primary p-3 text-lg shadow-md
                      transition-all hover:animate-text hover:bg-gradient-to-r hover:from-teal-500
                      hover:via-purple-500 hover:to-orange-500 hover:bg-clip-text hover:text-xl 
                      hover:font-black hover:text-transparent hover:shadow-lg"
          type="submit"
        >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};
export default LoginPanel;
