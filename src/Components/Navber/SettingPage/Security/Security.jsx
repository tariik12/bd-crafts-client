import { FaBuildingUser, FaCircleUser, FaHardDrive, FaOsi } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Security = () => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 gap-2 h-screen">
      <div className="flex mt-40 justify-center" >
        <div>
          <div>Account Settings</div>
          <ul className="space-y-10 mt-12">
            <li>
              <Link className="flex items-center gap-4 text-[20px]">
              <FaCircleUser size={24} className="text-[#7BB4FF]"/>
                Accounts
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 text-[20px]">
                <FaBuildingUser size={24} className="text-[#7BB4FF]"/>
                Personal Details
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 text-[20px]">
              <FaOsi size={24} className="text-[#7BB4FF]"/>
                Password and Security
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-4 text-[20px]">
              <FaHardDrive size={24} className="text-[#7BB4FF]"/>
                Payments
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:col-span-2 bg-gray-500">
        <div className="lg:w-full mx-auto">
        <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Security;
