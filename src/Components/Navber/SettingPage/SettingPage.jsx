import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, Outlet } from "react-router-dom";

const SettingPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 h-screen">
      <div className="bg-gray-400 bg-opacity-30 ">
        <div className="flex items-center justify-center mt-9">
          <img
            className="w-[202px] h-[202px]  rounded-full"
            src="https://i.ibb.co/3CqFXC5/Mostafizur-Rahman.jpg"
            alt="userIMg"
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <div>
            <h3 className="text-[35px] text-[#082B59]">{user?.displayName}</h3>
            <span className="text-[18px] text-[#082B59]">{user?.email}</span>
          </div>
        </div>
        <div className="mt-[45px]">
          <ul className="space-y-[20px] ">
            <li className="lg:w-[438px]   items-start  bg-[#7BB4FF] rounded-full px-4 py-1 text-[#FFF] text-[20px] ">
              <Link to="/setting/genarel">Genarel</Link>
            </li>
            <li className="lg:w-[438px] items-start bg-[#7BB4FF] rounded-full px-4 py-1 text-[#FFF] text-[20px] ">
              <Link to="/setting/security">Security</Link>
            </li>
            <li className="lg:w-[438px] items-start bg-[#7BB4FF] rounded-full px-4 py-1 text-[#FFF] text-[20px] ">
              <Link to="/setting/privacy">Privacy</Link>
            </li>
            <li className="lg:w-[438px] items-start bg-[#7BB4FF] rounded-full px-4 py-1 text-[#FFF] text-[20px] ">
              <Link to="/setting/activities">See all activites</Link>
            </li>
            <li className="lg:w-[438px] items-start bg-[#7BB4FF] rounded-full px-4 py-1 text-[#FFF] text-[20px] ">
              <Link to="/setting/support">support and help</Link>
            </li>
          </ul>
          <div className="flex justify-center items-center mt-[80px]">
            <Link
              to="/setting/alert"
              className="lg:w-[438px] mx-auto bg-[#FF0606] rounded-full px-4 py-1 text-[#FFF] text-[20px]"
            >
              Delete this account
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        {/* all content are here  */}
        <Outlet />
      </div>
    </div>
  );
};

export default SettingPage;
