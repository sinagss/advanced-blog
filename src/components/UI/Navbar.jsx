import { Layout, Menu, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import logo from "../../assets/undraw_cabin.svg";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout sticky top-0 flex">
      <Header className="flex w-full">
        <div className="float-left mb-4 ml-0 mr-6 mt-4 w-8">
          <img className="bg-cover" src={logo} alt="site logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={1}
          items={[
            { key: "homeKey", label: <Link to="/">Home</Link> },
            { key: "posts", label: <Link to="posts">Posts</Link> },
            { key: "about", label: <Link to="about">About</Link> },
          ]}
        />
        <Button type="primary" icon={<LoginOutlined />} className="">
          <Link to="login">Login</Link>
        </Button>
      </Header>
    </Layout>
  );
};
export default Navbar;
