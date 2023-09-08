import { useEffect, useState } from "react";
import {
  BsCalendarCheckFill,
 

} from "react-icons/bs";
import { FaComment, FaExternalLinkAlt, FaShoppingBasket } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { FaGear, FaShopware, FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './LeftSideBar.css'
const LeftSideBar = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetch("shopData.json")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  return (
    <div className="left">
      <div className=" flex flex-col">
        <div className="">
          <div className="grid grid-cols-2 gap-8">
            {/* bookmark card */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center p-2 gap-2">
              <Link to='/profile' className="text-center hover:underline">
              <CgProfile className="text-[#7BB4FF] w-10 h-10 ms-1" />
               Profile
              </Link>
            </div>
            {/* Connection Requests */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to='/wholeSealerForm' className="text-center hover:underline">
              <FaShopware className="text-[#7BB4FF] w-10 h-10 ms-9" />
              Wholesaler Form
              </Link>
            </div>
            {/* Events */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              
              <Link to='/eventPage' className="text-center hover:underline"><BsCalendarCheckFill className="text-[#7BB4FF] w-10 h-10 ms-1" /> Events</Link>
            </div>
            {/* Activity Log */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              
              <Link to='/shop' className="text-center hover:underline"> <FaShoppingBasket className="text-[#7BB4FF] w-10 h-10 ms-2" /> All Shop</Link>
            </div>
            {/* All Comments */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to='/messages' className="text-center hover:underline"><FaComment className="text-[#7BB4FF] w-10 h-10 ms-5" /> Massage</Link>
            </div>
            {/* Settings */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <Link to='/setting' className="text-center justify-center hover:underline"> <FaGear className="text-[#7BB4FF] w-10 h-10 ms-2" />Settings </Link>
              
            </div>
            {/* Groups */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <FaUserGroup className="text-[#7BB4FF] w-10 h-10" />
              <Link to='/myGroup' className="text-center hover:underline">My Groups</Link>
            </div>
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              
              <Link to="selerForm" className="text-center hover:underline">
              <FaShopware className="text-[#7BB4FF] w-10 h-10 ms-4" /> Seller Form</Link>
            </div>
          </div>
        </div>
        {/* left side bar bottom  */}
        <div className="bg-[#186DBE0F] py-2 px-3 mx-3 rounded-lg shadow-md mb-24">
          <h1 className="text-[#7BB4FF] text-2xl font-semibold">Shops</h1>
          {/* shop list */}

          {shop.map((singleShop) => (
            <div
              key={singleShop._id}
              className="flex justify-between items-center my-1"
            >
              <img
                src={singleShop?.Profile_image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="text-[#082B59]">{singleShop?.Name}</p>
              <Link to={`/specificShop/${singleShop._id}`}>
                <FaExternalLinkAlt />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
