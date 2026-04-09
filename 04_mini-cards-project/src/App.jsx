import React from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import AllCards from "./pages/AllCards";
import CardDetails from "./pages/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allcards",
        element: <AllCards />,
      },
      {
        path: "/allcards/:id",
        element: <CardDetails />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
