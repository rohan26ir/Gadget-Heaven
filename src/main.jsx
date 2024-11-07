import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Root from './Components/Roots/Root.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import DeviceDetails from './Components/Devices/DeviceDetails.jsx';
import Cart from './Components/Dashboard/Dash/Cart.jsx';
import WishList from './Components/Dashboard/Dash/WishList/WishList.jsx';
import Wishlists from './Components/Dashboard/Dash/WishList/Wishlists.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'gadgets/:gadgetID',
        element: <DeviceDetails></DeviceDetails>,
        loader: () => fetch('/device.json')
      },
      {
        path: '/Statistics',
        element: <Statistics />
      },
      {
        path: '/Dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '',
            element: <Cart></Cart>
          },
          {
            path: 'cart',
            element: <Cart />
          },
          {
            path: 'wishlist',
            element: <Wishlists></Wishlists>,
            loader: () => fetch('/device.json')
          }
        ],
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
