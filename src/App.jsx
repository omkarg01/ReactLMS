import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

// http://example.com/ - Home
// http://example.com/products - Products
// http://example.com/products/:productId - ProductDetail

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Product /> },
  { path: "/products/:productId", element: <ProductDetail /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
