import { ConfigProvider } from "antd";
import { Layout } from "antd";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
const { Footer } = Layout;

function App() {
  const theme = {
    token: {
      colorPrimary: "#6c63ff",
      borderRadius: 3,
      boxShadow:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Navbar />
          <Outlet />
          <Footer className="absolute  w-full bg-primaryLight text-center">
            Cryware Inc. ©2023
          </Footer>
        </>
      ),
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "posts",
          element: <Posts />,
          errorElement: <Error />,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: "post/:id",
          element: <PostDetail />,
          errorElement: <Error />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <Error />,
    },
  ]);

  return (
    <ConfigProvider theme={theme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
