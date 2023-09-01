import React, { useContext } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const PasswordAndSecurity = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="grid grid-col-1  gap-2 h-screen bg-gray-400 bg-opacity-30 px-20 ">
        <div className="flex mt-40 justify-center ">
          <div>
            <div>
              <h2 className="text-4xl font-bold">Password and Security</h2>
            </div>
            <h4 className="mt-4 font-semibold">Login and recovery</h4>
            <p className="text-[#000000] my-4">
              Manage your Account password and recovery method and Two-Factor Authentication and security checkup.
            </p>

            <div className="mt-4 bg-[#FFF] px-4 rounded-lg">
              <div className="flex justify-between items-center  py-6">
                <div>
                  <h2 className="font-semibold">Change Password</h2>
                </div>
                <span>
                  <FaAngleRight />
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center  py-2">
                <div>
                  <h2 className="font-semibold">Two-Factor Authentication</h2>
                </div>
                <span>
                  <FaAngleRight />
                </span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center  py-2">
                <div>
                  <h2 className="font-semibold">Security Checkup</h2>
                </div>
                <span>
                  <FaAngleRight />
                </span>
              </div>
              <hr className="my-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordAndSecurity;
