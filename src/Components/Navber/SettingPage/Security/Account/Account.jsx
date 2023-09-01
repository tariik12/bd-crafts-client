import React, { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const Account = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="grid grid-col-1  gap-2 h-screen bg-gray-400 bg-opacity-30 px-20">
      <div className="flex mt-40 justify-center">
        <div>
          <div>
            <h2 className="text-4xl font-bold">Account</h2>
          </div>
          <p className="text-[#000000] my-4">
            Add or remove accounts from this Accounts Center. Removing an
            account will also remove any profiles managed by that account
          </p>
          <button className="bg-[#FFF] w-full text-start px-4 py-3 rounded-lg text-[#7BB4FF] text-[18px]">
            Add accounts
          </button>
          <div className="mt-4 bg-[#FFF] px-4 rounded-lg">
            <div className="flex justify-between items-center py-2">
              <div>
                <h2 className="font-semibold">{user?.displayName}</h2>
                <span className="text-black text-opacity-70">Facebook</span>
              </div>
              <button className="rounded-2xl border-[1px] px-4 py-1">
                Remove
              </button>
            </div>
            <hr className="my-2" />
            <div className="flex items-center py-4 gap-3">
              <img
                src={user?.photoURL}
                className="w-12 h-12 rounded-full"
                alt="profile"
              />
              <h2>{user?.displayName}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
