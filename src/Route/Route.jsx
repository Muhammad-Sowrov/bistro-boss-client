
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";
import Menu from "../components/Home/Menu/Menu";
import Order from "../pages/Order/Order";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

export default Route;
