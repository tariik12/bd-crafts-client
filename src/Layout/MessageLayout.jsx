import { Outlet } from "react-router-dom";
import LeftSide from "../Components/Messeges/Messages/LeftSide/LeftSide";

import Navbar from "../Components/Navber/Navbar";

const MessageLayout = () => {
  return (
    <div className="">
     <div>
     <Navbar />
     </div>
     
      <div className="flex ">
      <div className="w-1/4 h-[690px]  bg-[#a7c6ef] ">
        <LeftSide></LeftSide>
      </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MessageLayout;
