import { Link } from "react-router-dom";
import Container from "../../Utilities/Container";
import MenuDropdown from "./MenuDropdown";
import { FaSistrix } from "react-icons/fa6";
import './Navbar.css' ; 

const Navbar = () => {
  return (
    <div className="navbar fixed lg:w-full bg-[#327ee0] z-50 text-white ">
    {/* <div className="lg:w-full mx-auto bg-[#327ee0]  z-10 shadow-sm nav"> */}
      <div className="py-1 border-b[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <span className="text-[#FFF] text-[33px] font-normal capitalize">
                  bdcrafts
                </span>
              </Link>
              <div className="lg:w-[350px] mx-auto w-full py-2 rounded-full  transition cursor-pointer relative">
                <div className="form-control lg:w-[350px] mx-auto w-full ">
                  <input
                    type="text"
                    placeholder="Search for friend, post or video"
                    className="input border h-[39px] border-white rounded-full bg-[#FFF] text-black px-10 w-full"
                  />
                </div>
                <div className="absolute -mt-[28px] ml-3 text-black">

                  <FaSistrix size={22} />
                </div>
              </div>
            </div>
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
