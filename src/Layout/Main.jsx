import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navber/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
  
      <div className="pt-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
