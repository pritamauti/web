import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/Menu';
import Orders from './components/Orders';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,    
  children:[
    // {
    //   path:"/product-page",
    //   element:<Product/>
    // },
    {
      path:"/order-page",
      element:<Orders/>
    }
  ]
} 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router1} />
);


