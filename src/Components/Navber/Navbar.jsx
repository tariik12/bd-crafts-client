import { Link } from "react-router-dom";
import Container from "../../Utilities/Container";
import MenuDropdown from "./MenuDropdown";
import { FaSistrix } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className=" w-full mx-auto bg-[#7BB4FF] z-10 shadow-sm">
      <div className="py-1 border-b[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex gap-4 items-center">
              <Link to="/">
                <span className="text-[#FFF] text-[33px] font-normal capitalize">
                  bdcrafts
                </span>
              </Link>
              <div className="lg:w-[596px] mx-auto w-full py-2 rounded-full  transition cursor-pointer relative">
                <div className="form-control ">
                  <input
                    type="text"
                    placeholder="Search for friend, post or video"
                    className="input border h-[39px] border-white rounded-full bg-[#FFF] text-black px-10"
                  />
                </div>
                <div className="absolute -mt-[28px] ml-3 ">
                  
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
