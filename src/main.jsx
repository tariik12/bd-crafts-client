import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import router from "./router";
const queryClient = new QueryClient();

import ApiContestProvider from "./Provider/ApiContestProvider";
import AuthProvider from "./Provider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
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
            theme="light"
          />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </ApiContestProvider>
);
