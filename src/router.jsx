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
import FriendRequest from "./Pages/FindFriend/FriendRequest";
import AddFriend from "./Pages/FindFriend/AddFriend";
import AllFriend from "./Pages/FindFriend/AllFriend";
import CreateGroup from "./Pages/FindFriend/CreateGroup";
import Payment from "./Pages/Payment/Payment";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SettingPage from "./Components/Navber/SettingPage/settingpage";
import Genarel from "./Components/Navber/SettingPage/Genarel/Genarel";
import Alert from "./Components/Navber/SettingPage/Alert/Alert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //mostafizur
      {
        path: "/setting",
        element: <SettingPage />,
        children: [
          {
            path: "/setting/genarel",
            element: <Genarel />,
          },
          {
            path: "/setting/security",
            element: 'security',
          },
          {
            path: "/setting/privacy",
            element: 'privacy',
          },
          {
            path: "/setting/activities",
            element: 'activities',
          },
          {
            path: "/setting/support",
            element: 'support',
          },
          {
            path: "/setting/alert",
            element: <Alert />,
          },
        ],
      },

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
      {
        path: "/friendRequest",
        element: <FriendRequest></FriendRequest>,
      },
      {
        path: "/addFriend",
        element: <AddFriend></AddFriend>,
      },
      {
        path: "/allFriend",
        element: <AllFriend></AllFriend>,
      },
      {
        path: "/createGroup",
        element: <CreateGroup></CreateGroup>,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  // Rayhan
  {
    path: "messages",
    element: <MessageLayout />,
    children: [
      {
        path: "/messages",
        element: <ChatBox />,
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
