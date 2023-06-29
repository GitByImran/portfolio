import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "./Root";
import About from "../pages/about/About";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default Router;
