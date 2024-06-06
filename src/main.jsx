import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import "./index.css";

import { addBurger, listOrder } from './routes/orders/localStorageRepository';

import WelcomePage from "./routes/WelcomePage";
import Order from "./routes/orders/Order";
import Menu from "./routes/orders/Menu";
import Summary from "./routes/orders/Summary";
import ErrorPage from "./ErrorPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WelcomePage />} errorElement={<ErrorPage />} />
      <Route path="order" element={<Order />} errorElement={<ErrorPage />} >
        <Route path="menu" element={<Menu />} action={addBurger}>
          <Route path="summary" element={<Summary />} loader={listOrder} />
        </Route>
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
