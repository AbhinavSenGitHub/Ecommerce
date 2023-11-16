import React from 'react';
import './App.css'
import Home from './features/page/Home';
import LoginPage from './features/page/LoginPage';
import SignupPage from './features/page/SignupPage';

//router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './features/page/CartPage';
import Checkout from './features/page/Checkout';
import ProductDetailPage from './features/page/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: "product-details",
    element: <ProductDetailPage></ProductDetailPage>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
