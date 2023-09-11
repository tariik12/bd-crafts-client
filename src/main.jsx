import * as ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthProvider from './Provider/AuthProvider';
import ApiContestProvider from "./Provider/ApiContestProvider";
ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiContestProvider>
 <AuthProvider>
    <QueryClientProvider client={queryClient}>

     <div className="">
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
    </QueryClientProvider>
  </AuthProvider>
  </ApiContestProvider>
 

);