import React from 'react'
import ReactDOM from 'react-dom/client'
import {Ripple} from 'react-preloaders';
import {
  RouterProvider, ScrollRestoration,
} from "react-router-dom";
import './index.css'
import router from './Router/Router.jsx';
import AuthProvider from './Components/Providers/AuthProvider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import PreLoader from './Components/UseableComponents/Loader/PreLoader.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Ripple background="#303938" color="#fff"  animation="slide" />
    </AuthProvider>
    <Toaster />
  </React.StrictMode>,

)
