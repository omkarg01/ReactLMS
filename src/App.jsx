import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";

// http://example.com/ - Home
// http://example.com/products - Products

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Product /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

  return (
    <div>
      This is App Component
    </div>
  )
}

export default App