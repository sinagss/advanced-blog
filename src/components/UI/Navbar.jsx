import { Layout, Menu, Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import logo from "../../assets/undraw_cabin.svg";
import { Link, NavLink } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Layout className="layout sticky top-0 z-50 flex">
      <Header className="flex w-full items-center gap-2">
        <div className="absolute left-2 mr-3 w-10 md:mb-4 md:mr-4 md:mt-4">
          <img className="bg-cover" src={logo} alt="site logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={1}
          items={[
            { key: "homeKey", label: <NavLink to="/">Home</NavLink> },
            { key: "posts", label: <NavLink to="posts">Posts</NavLink> },
            { key: "about", label: <NavLink to="about">About</NavLink> },
          ]}
        />
        <Button
          type="primary"
          icon={<LoginOutlined />}
          className="absolute right-5 flex items-center gap-2"
        >
          <Link to="login">Login</Link>
        </Button>
      </Header>
    </Layout>
  );
};
export default Navbar;
