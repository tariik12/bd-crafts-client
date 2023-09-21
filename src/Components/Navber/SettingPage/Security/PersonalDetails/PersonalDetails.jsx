import React, { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import { FaAngleRight } from "react-icons/fa6";

const PersonalDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
      <div className="grid grid-col-1  gap-2 h-screen bg-gray-400 bg-opacity-30 px-20">
        <div className="flex mt-40 justify-center">
          <div>
            <div>
              <h2 className="text-4xl font-bold">Personal Details</h2>
            </div>
            <p className="text-[#000000] my-4">
            BdCrafts uses this information to verify your identity and to keep our community safe. You decide what personal details you make visible to others.
            </p>
           
            <div className="mt-4 bg-[#FFF] px-4 rounded-lg">
              <div className="flex justify-between items-center  py-2">
              <div>
                <h2 className="font-semibold">Contact Info</h2>
                <span className="text-black text-opacity-70">
                  {user?.email}
                </span>
              </div>
              <span><FaAngleRight/></span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center  py-2">
              <div>
                <h2 className="font-semibold">BirthDay</h2>
                <span className="text-black text-opacity-70">
                 April 3, 2002
                </span>
              </div>
              <span><FaAngleRight/></span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center  py-2">
              <div>
                <h2 className="font-semibold">Account OwnerShip and Control</h2>
                <span className="text-black text-opacity-70">
                 <p>Manage your data,modify your legacy contact,deactivate your account and profile</p>
                </span>
              </div>
              <span><FaAngleRight/></span>
              </div>
              <hr className="my-2" />
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
