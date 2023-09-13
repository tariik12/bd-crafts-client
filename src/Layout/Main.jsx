import { Outlet } from "react-router-dom";
import NavbarBottom from "../Components/Navber/NavbarBottom/NavbarBottom";

const Main = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <NavbarBottom></NavbarBottom>
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
