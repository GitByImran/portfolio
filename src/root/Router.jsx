import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "./Root";
import About from "../pages/about/About";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

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
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
