
// import { Link } from "react-router-dom";
// // import Avatar from "./Avatar";

// import {
//   FaUserLarge,
//   FaEnvelopeOpenText,
//   FaRegBell,
//   FaHouse,
// } from "react-icons/fa6";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";

// const MenuDropdown = () => {
// const {user} = useContext(AuthContext)
//   return (
//     <div className="relative">
//       <div className="flex flex-row items-center gap-3">
//         <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full  transition cursor-pointer">
//           <div className=""></div>
//           <div className="flex gap-4">
//             <div className="flex items-center gap-4">
//               <FaHouse size={25} className="text-white" />
//               <Link to="/" className="text-[22px] text-white">
//                 Home
//               </Link>
//             </div>
//             <div className="ml-12 flex gap-4">
//               <div className="relative">
//                 <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
//                   99+
//                 </span>
//                 <div className="">
//                 <Link to="/findFriend"><FaUserLarge size={25} className="text-white"/></Link>
                  
//                 </div>
//               </div>
//               <div className="relative">
//                 <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
//                   99+
//                 </span>
//                 <div className="">
                  
//                   <FaRegBell size={25} className="text-white"/>
                  
//                 </div>
//               </div>
//               <div className="relative">
//                 <span className="absolute top-0 start-100 transform -translate-y-1/2 translate-x-1/2  text-[10px] text-center leading-none bg-red-500 text-white rounded-full p-[2px]">
//                   99+
//                 </span>
//                 <div className="">
//                   <Link to="/messages">
//                   <FaEnvelopeOpenText size={25} className="text-white"/></Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           {
//             user? <>
//                       <div className="avatar">
// <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
// <img src={user?.photoURL} />
// </div>
// </div>
//             </>:<>
//             <img
//             src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
//             className="h-[50px] w-[50px] rounded-full"
//             alt="profile"
//           />
//             </>
//           }
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuDropdown;
import {
    FaUserLarge,
    FaEnvelopeOpenText,
    FaRegBell,
    FaHouse,
  } from "react-icons/fa6";

import { AiOutlineMenu } from "react-icons/ai";
// import Avatar from './Avatar'
import { useCallback, useContext, useState } from "react";

 import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
// import Avatar from "./Avatar";
// import HostModal from "../../Modal/HostRequestModal";
// import { becomeHost } from "../../../api/auth";
import { toast } from "react-hot-toast";

const MenuDropdown = () => {
  const { user, logOut, role,setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);
  const modalHandler = (email) => {
    becomeHost(email).then((data) => {
      console.log(data);
      toast.success("You are host now,Post Rooms");
      setRole("host");
      closeModal();
    });
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full  transition cursor-pointer">
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
                  <Link to="/messages">
                  <FaEnvelopeOpenText size={25} className="text-white"/></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
          {
            user? <>
                      <div className="avatar">
<div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
<img src={user?.photoURL} />
</div>
</div>
            </>:<>
            <img
            src="https://i.ibb.co/2gbzMTG/Rectangle-5.png"
            className="h-[40px] w-[40px] rounded-full"
            alt="profile"
          />
            </>
          }
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm z-50">
          <div className="flex flex-col cursor-pointer">
          <Link to="/profile" className="text-[22px] text-white">
                Profile
              </Link>
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
           
       
                <div
                  onClick={() => {
                    setRole(null);
                    logOut();
                  }}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Sign Up
                </Link>
              
              </>
            )}
          </div>
        </div>
      )}
 
    </div>
  );
};

export default MenuDropdown;

