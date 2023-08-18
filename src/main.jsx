import * as ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./router";



import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from './Provider/AuthProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
     <div >
     <Toaster />
  <RouterProvider router={router} />
  <ToastContainer 
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"/>
</div>   
  </AuthProvider>

);