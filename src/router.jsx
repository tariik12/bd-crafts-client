import {
    createBrowserRouter,
    
  } from "react-router-dom";
  import "./index.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import InboxMessages from "./Pages/InboxMessages/InboxMessages";
import Profile from "./Pages/Profile/Profile";
import FindFriend from "./Pages/FindFriend/FindFriend";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        //ahaduzzaman ahad vai
        {
          path:'/inboxMessages',
          element:<InboxMessages/>
        },
        //Mahdi vai
        {
          path:'/profile',
          element:<Profile/>
        },
        //Tarik vai
        {
          path:'/findFriend',
          element:<FindFriend/>
        },

      ]
    },
  ]);

  export default router;
  