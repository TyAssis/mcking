import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./index.css";

import Root from "./routes/Root";
import Order from "./routes/orders/Order";
import Menu from "./routes/orders/Menu";
import Summary from "./routes/orders/Summary";
import ErrorPage from "./ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />} errorElement={<ErrorPage />} />
      <Route path="order" element={<Order />} errorElement={<ErrorPage />} >
        {/* <Route path="menu" element={<Menu />} /> */}
        <Route path="summary" element={<Summary />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
