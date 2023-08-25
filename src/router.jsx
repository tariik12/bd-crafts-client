import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import FindFriend from "./Pages/FindFriend/FindFriend";
import Home from "./Pages/Home/Home";

import Profile from "./Pages/Profile/Profile";
import "./index.css";
import MessageLayout from "./Layout/MessageLayout";
import ChatBox from "./Components/ChatBox/ChatBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //ahaduzzaman ahad vai
      // {
      //   path: "/inboxMessages",
      //   element: <InboxMessages />,
      // },
      //Mahdi vai
      {
        path: "/profile",
        element: <Profile />,
      },
      //Rabeya Akter
      {
        path: "/findFriend",
        element: <FindFriend />,
      },
    ],
  },
  {
    path: "messages",
    element: <MessageLayout />,
    children: [
      {
        path: "/messages",
        element: <ChatBox/>,
      },
      
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
