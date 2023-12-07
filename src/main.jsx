import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider, ScrollRestoration,
} from "react-router-dom";
import './index.css'
import router from './Router/Router.jsx';
import AuthProvider from './Components/Providers/AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,

)
