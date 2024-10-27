import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import Me from "./Me";
import App from "./App";
import { loader as meLoader } from "./loaders/meLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // <App /> wraps the whole structure, providing global layout
    children: [
      {
        path: "/",
        element: <Layout />, // <Layout /> still provides per-page layout, Outlet handling, etc.
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
            children: [
              {
                path: "me",
                element: <Me />,
                loader: meLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
