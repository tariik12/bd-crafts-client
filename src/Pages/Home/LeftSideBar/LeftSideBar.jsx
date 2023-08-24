import {
  BsArrowRight,
  BsCalendarCheckFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { FaGear, FaUserGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div>
      <div className=" flex flex-col gap-12 ">
        <div className="">
          <div className="grid grid-cols-2 gap-2 p-2">
            {/* bookmark card */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center p-2 gap-2">
              <BsFillBookmarkFill className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">
                Bookmarked Posts
              </Link>
            </div>
            {/* Connection Requests */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <BsArrowRight className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">
                Connection Requests
              </Link>
            </div>
            {/* Events */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <BsCalendarCheckFill className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">Events</Link>
            </div>
            {/* Activity Log */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <BsFillBookmarkFill className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">Activity Log</Link>
            </div>
            {/* All Comments */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <FaComment className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">All Comments</Link>
            </div>
            {/* Settings */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <FaGear className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">Settings</Link>
            </div>
            {/* Groups */}
            <div className="bg-[#186DBE0F] rounded-lg shadow-md hover:shadow-lg  flex flex-col justify-center items-center p-2 gap-2">
              <FaUserGroup className="text-[#7BB4FF] w-10 h-10" />
              <Link className="text-center hover:underline">My Groups</Link>
            </div>
          </div>
        </div>
        {/* left side bar bottom  */}
        <div className="bg-red-700 bg-opacity-10"></div>
      </div>
    </div>
  );
};

export default LeftSideBar;
