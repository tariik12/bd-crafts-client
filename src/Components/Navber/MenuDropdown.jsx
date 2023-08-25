
import { Link } from "react-router-dom";
// import Avatar from "./Avatar";

import {
  FaUserLarge,
  FaEnvelopeOpenText,
  FaRegBell,
  FaHouse,
} from "react-icons/fa6";

const MenuDropdown = () => {

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full  transition cursor-pointer">
          <div className=""></div>
          <div className="flex gap-4">
            <div className="flex items-center gap-4">
              <FaHouse size={25} className="text-white" />
              <Link to="/" className="text-[22px] text-white">
                Home
              </Link>
            </div>
            <div className="ml-12 flex gap-4">
              <div className="relative">
                <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
                  99+
                </span>
                <div className="">
                <Link to="/findFriend"><FaUserLarge size={25} className="text-white"/></Link>
                  
                </div>
              </div>
              <div className="relative">
                <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
                  99+
                </span>
                <div className="">
                  
                  <FaRegBell size={25} className="text-white"/>
                  
                </div>
              </div>
              <div className="relative">
                <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
                  99+
                </span>
                <div className="">
                  <FaEnvelopeOpenText size={25} className="text-white"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
            className="h-[50px] w-[50px] rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;

1917895603;
550564;

1917795603;
550564;
