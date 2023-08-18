import { useContext } from "react";
import {
  FaAngleDown,
  FaBucket,
  FaCheese,
  FaCoins,
  FaCube,
  FaRegNewspaper,
  FaUserGroup,
  FaUsers,
  FaVideo,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const LeftSideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className=" flex flex-col gap-12 ">
        <div className="bg-[#9CCBDD] bg-opacity-20">
          <ul className="mt-12 space-y-[32px]">
            <li>
              <Link
                to="#"
                className={`
                  flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4  ml-3 `}
              >
                <div className="hidden md:block">
                  <img
                    className="rounded-full"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/GVLGYts/images.png"
                    }
                    alt="profile"
                    height="35"
                    width="35"
                  />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  <span className="text-[12px">{user?.displayName}</span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4  ml-3 `}
              >
                <div
                  className={`text-[35px] text-blue-500 cursor-pointer duration-500 text-center `}
                >
                  <FaUserGroup />
                </div>

                <div
                  className={` font-normal  text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Friends
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] text-blue-500 cursor-pointer duration-500 text-center `}
                >
                  <FaRegNewspaper />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Feeds
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] text-blue-500 cursor-pointer duration-500 text-center `}
                >
                  <FaUsers />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Groups
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] text-blue-500 cursor-pointer duration-500 text-center `}
                >
                  <FaBucket />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Marketplace
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex  hover:bg-[#FFF] rounded-lg items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] text-blue-500 cursor-pointer duration-500 text-center `}
                >
                  <FaVideo />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Video
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex hover:bg-[#FFF] rounded-lg items-center mb-4 gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] bg-[#FFF] rounded-full cursor-pointer duration-500 text-center `}
                >
                  <FaAngleDown  />
                </div>
                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Show More
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-red-700 bg-opacity-10">
          <ul className="mt-12 space-y-[32px]">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center gap-x-4  ml-3 `}
              >
                <div
                  className={`text-[35px] cursor-pointer duration-500 text-center `}
                >
                  <FaUserGroup />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Explore
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/analaytics"
                className="flex items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] cursor-pointer duration-500 text-center `}
                >
                  <FaRegNewspaper />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Discover
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/analaytics"
                className="flex items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] cursor-pointer duration-500 text-center `}
                >
                  <FaCheese />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Trending
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/analaytics"
                className="flex items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] cursor-pointer duration-500 text-center `}
                >
                  <FaCoins />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Buzz
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/analaytics"
                className="flex items-center gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] cursor-pointer duration-500 text-center `}
                >
                  <FaCube />
                </div>

                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                 Featured
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex hover:bg-[#FFF] rounded-lg items-center mb-4 gap-x-4 ml-3"
              >
                <div
                  className={`text-[35px] bg-[#FFF] rounded-full cursor-pointer duration-500 text-center `}
                >
                  <FaAngleDown  />
                </div>
                <div
                  className={` font-normal text-[20px] duration-300 ${
                    !open && "scale-0"
                  }`}
                >
                  Show More
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
