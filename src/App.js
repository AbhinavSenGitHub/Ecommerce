import React, { useEffect } from 'react';
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
import Protacted from "./features/auth/components/Protected"
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protacted><Home></Home></Protacted>
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
    element: <Protacted><CartPage></CartPage></Protacted>,
  },
  {
    path: "checkout",
    element: <Protacted><Checkout></Checkout></Protacted>,
  },
  {
    path: "product-details/:id",
    element: <Protacted><ProductDetailPage></ProductDetailPage></Protacted>
  },
]);

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
    }
  },[dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
