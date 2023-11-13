
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Layout from "../Layout/Layout";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Route;