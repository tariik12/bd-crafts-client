import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import FindFriend from "./Pages/FindFriend/FindFriend";
import Home from "./Pages/Home/Home";

import ChatBox from "./Components/ChatBox/ChatBox";
import MessageLayout from "./Layout/MessageLayout";
import AddFriend from "./Pages/FindFriend/AddFriend";
import AllFriend from "./Pages/FindFriend/AllFriend";
import CreateGroup from "./Pages/FindFriend/CreateGroup";
import FriendRequest from "./Pages/FindFriend/FriendRequest";
import Payment from "./Pages/Payment/Payment";
import Profile from "./Pages/Profile/Profile";
import Shop from "./Pages/Shop/Shop";
import "./index.css";

import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import MyCart from "./Components/Dashboard/GeneralUser/MyCart";
import PayedProducts from "./Components/Dashboard/GeneralUser/PayedProducts";
import PaymentHistory from "./Components/Dashboard/GeneralUser/PaymentHistory";
import Alert from "./Components/Navber/SettingPage/Alert/Alert";
import Genarel from "./Components/Navber/SettingPage/Genarel/Genarel";
import SettingPage from "./Components/Navber/SettingPage/SettingPage";
import DashboardLayout from "./Layout/Dashboard/DashboardLayout";

import ManageProducts from "./Components/Dashboard/Admin/ManageProducts";
import PendingSeller from "./Components/Dashboard/Admin/PendingSeller";
import AddProducts from "./Components/Dashboard/Seller/AddProducts";
import MyShop from "./Components/Dashboard/Seller/MyShop";
import Privacy from "./Components/Navber/SettingPage/Privacy/Privacy";
import Account from "./Components/Navber/SettingPage/Security/Account/Account";
import AddPreference from "./Components/Navber/SettingPage/Security/AddPreference/AddPreference";
import PasswordAndSecurity from "./Components/Navber/SettingPage/Security/PasswordAndSecurity/PasswordAndSecurity";
import PersonalDetails from "./Components/Navber/SettingPage/Security/PersonalDetails/PersonalDetails";
import Security from "./Components/Navber/SettingPage/Security/Security";
import SellerForm from "./Components/SellerForm/SellerForm";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
import ManageUser from "./Components/Dashboard/Admin/ManageUser";
import MsgApp from "./Pages/MsgApp/MsgApp/MsgApp";

import EventPage from "./Components/Event/EventPage";
import MyGroupPage from "./Components/MyGroupPage/MyGroupPage";
import SpecificShop from "./Components/SpecificShop/SpecificShop";
import WholesalerForm from "./Components/WholesalerForm/WholesalerForm";
import Edit from "./Components/Navber/SettingPage/Genarel/Edit";
import ShowSearchData from "./Components/ShowSearchData/ShowSearchData";
import VedioConference from "./Pages/VedioConference/VedioConference";
import RoomPage from "./Pages/VedioConference/RoomPage/RoomPage";
import LiveStreaming from "./Pages/LiveStreaming/LiveStreaming";
import Live from "./Pages/LiveStreaming/Live/Live";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      //mostafizur rahmaan
      {
        path: "/setting",
        element: (
          <PrivetRoute>
            <SettingPage />
          </PrivetRoute>
        ),
        children: [
          {
            path: "/setting/genarel",
            element: <Genarel />,
          },
          {
            path: "/setting/security",
            element: <Security />,
            children: [
              {
                path: "/setting/security/account",
                element: <Account />,
              },
              {
                path: "/setting/security/personalDetails",
                element: <PersonalDetails />,
              },
              {
                path: "/setting/security/passwordAndSecurity",
                element: <PasswordAndSecurity />,
              },
              {
                path: "/setting/security/addPreference",
                element: <AddPreference />,
              },
            ],
          },
          {
            path: "/setting/privacy",
            element: <Privacy />,
          },
          {
            path: "/setting/activities",
            element: "activities",
          },
          {
            path: "/setting/support",
            element: "support",
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
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
      //Rabeya Akter
      {
        path: "/findFriend",
        element: (
         
            <FindFriend />
          
        ),
      },
      {
        path: "/myGroup",
        element: <MyGroupPage />,
      },
      {
        path: "/eventPage",
        element: <EventPage />,
        loader: () => fetch(`http://localhost:5000/eventdata`),
      },
      {
        path: "/friendRequest",
        element: (
    
            <FriendRequest></FriendRequest>
         
        ),
      },
      {
        path: "/addFriend",
        element: (
        
            <AddFriend></AddFriend>
     
        ),
      },
      {
        path: "/allFriend",
        element: (
    
            <AllFriend></AllFriend>
         
        ),
      },
      {
        path: "/createGroup",
        element: (
        
            <CreateGroup></CreateGroup>
         
        ),
      },

      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/liveStreaming",
        element: <LiveStreaming />,
      },
      {
        path: "/live/:roomId",
        element: <Live />,
      },
      {
        path: "specificShop/:id",
        element: <SpecificShop />,
        loader: ({ params }) => fetch(`shopData.json/${params.id}`),
      },
      {
        path: "/searchData",
        element: <ShowSearchData />,
      },

      {
        path: "/selerForm",
        element: (
          <PrivetRoute>
            <SellerForm />
          </PrivetRoute>
        ),
      },
      {
        path: "/wholeSealerForm",
        element: (
          <PrivetRoute>
            <WholesalerForm />
          </PrivetRoute>
        ),
      },
    ],
  },

  // Rayhan
  {
    path: "messages",
    element: (
      <PrivetRoute>
        <MessageLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/messages",
        element: <ChatBox />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "payed",
        element: <PayedProducts />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      {
        path: "manageShop",
        element: <ManageProducts />,
      },

      {
        path: "pendingSeller",
        element: <PendingSeller></PendingSeller>,
      },
      {
        path: "manageUser",
        element: <ManageUser />,
      },
      {
        path: "addProducts",
        element: <AddProducts />,
      },
      {
        path: "myShop",
        element: <MyShop />,
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
  {
    path: "/edit",
    element: <Edit></Edit>,
  },
  {
    path: "/msgApp",
    element: (
      <PrivetRoute>
        <MsgApp />
      </PrivetRoute>
    ),
  },
  {
    path: "/conference",
    element: (
      <PrivetRoute>
        {" "}
        <VedioConference />
      </PrivetRoute>
    ),
  },
  {
    path: "/meetRoom/:roomCode",
    element: (
      <PrivetRoute>
        <RoomPage />
      </PrivetRoute>
    ),
  },
]);

export default router;
