import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Detalle from './Routes/Detalle'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "pokemon/:idPokemon",
    element: <Detalle/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
