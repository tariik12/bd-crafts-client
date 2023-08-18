import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
// import Avatar from "./Avatar";
import { useContext, useState } from "react";
import { FaUserLarge, FaEnvelopeOpenText, FaRegBell } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

const MenuDropdown = () => {
  const { user,logOut } = useContext(AuthContext)
  // eslint-disable-next-line no-unused-vars
  const role = true;
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = () =>{
    logOut()
    .then(() =>{})
    .catch(error =>console.log(error.code))
  }
  // const toggleOpen = useCallback(() => {
  //   setIsOpen((value) => !value);
  // }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-8 rounded-full  transition cursor-pointer">
          <div className=""></div>
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/findFriend">FindFriend</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/inboxMessages">Massage</Link>
            <div className="ml-12 flex gap-4">
              <FaUserLarge size={20} />
              <FaEnvelopeOpenText size={20} />
              <FaRegBell size={20} />
            </div>
          </div>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
          <img
      className="rounded-full"
      src={user && user.photoURL ? user.photoURL : "https://scontent.fdac27-2.fna.fbcdn.net/v/t1.15752-9/317249885_1110507886283408_4537665018233507849_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmqRJsYyqwFvcwNG8LQzVbEyJIpenVrFwTIkil6dWsXONMylLVd-kSDXNGgTg_1WgqWy8Y35pzLGboc8duA3ii&_nc_ohc=B5F1EuAAZUgAX_UZHcu&_nc_ht=scontent.fdac27-2.fna&oh=03_AdR1mKEqL-iCLr6DRNiItCUMlUCd6zZRq5DI_b-oTR22vQ&oe=6505F4C3"}
      alt="profile"
      height="30"
      width="30"
    />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm z-50">
          <div className="flex flex-col cursor-pointer">
            <Link
              to="/"
              className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Home
            </Link>
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>

                <div
                  // onClick={() => {
                  //   setRole(null);
                    
                  // }}
                  onClick={handleLogout} to='/'
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
                  to="/register"
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

1917895603;
550564;

1917795603;
550564;
