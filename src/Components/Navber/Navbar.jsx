import { Link } from "react-router-dom";
import Container from "../../Utilities/Container";
import MenuDropdown from "./MenuDropdown";





const Navbar = () => {
    return (
        <div className=" w-full bg-white z-10 shadow-sm">
      <div className="py-1 border-b[1px]">
        <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
        <Link to="/">
      <img className="hidden md:block " src="https://i.ibb.co/syHXLqY/bd-Craft-Logo.png" alt="logo" width="100" height="100" />
    </Link>
    <div className="w-96  py-2 rounded-full  transition cursor-pointer">
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-96 md:w-auto"
        />
      </div>
    </div>
           <MenuDropdown/>
          </div>
        </Container>
          
          
      </div>
    </div>
    );
};

export default Navbar;