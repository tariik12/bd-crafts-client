import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="pt-22">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;