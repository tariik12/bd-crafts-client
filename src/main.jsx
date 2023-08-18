import * as ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
<div>
<Toaster />
    <RouterProvider router={router} />
</div>

);