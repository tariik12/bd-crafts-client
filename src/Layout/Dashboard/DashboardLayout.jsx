import { FaHome ,FaShopify,FaChessBishop} from "react-icons/fa";

import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiInstructure} from "react-icons/si";
import {FcShop } from "react-icons/fc";

import { NavLink, Outlet } from "react-router-dom";
import useSeller from "../../hooks/useSeller";
import useAdmin from "../../hooks/useAdmin";




const DashboardLayout = () => {
const isBuyer =false;
const isWholeseller =false;
const [isSeller,isSellerLoading] = useSeller();
const [isAdmin,isLoading] = useAdmin();

if(isLoading || isSellerLoading){
  return <div className="flex md:mt-64 items-center justify-center ">
    <div className="radial-progress animate-spin" style={{"--value":70}}>70%</div>
  </div>
}

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">

    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#7BB4FF] text-base-content font-bold">
      {/* Sidebar content here */}

      {isAdmin &&(
            <>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="manageShop"><FcShop></FcShop> Manage Shop</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="pendingSeller"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>Pending Sellers</NavLink>
              </li>
            </>
          )}
          {isSeller && (
            <>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="myShop">
                <FcShop></FcShop> My Shop</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="addProducts"><FaShopify></FaShopify> Add Products</NavLink>
              </li>
            </>
          )}
          {isWholeseller && (
            <>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="myShop">
                <FcShop></FcShop> My Shop</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="addProducts"><FaShopify></FaShopify> Add Products</NavLink>
              </li>
            </>
          )}
          {isBuyer && (
            <>
             <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="myCart"><GiShoppingCart></GiShoppingCart> MyCart </NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="payed"><FaChessBishop></FaChessBishop> Payed</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="paymentHistory"><RiSecurePaymentLine></RiSecurePaymentLine>Payment History</NavLink>
              </li>
            </>
          )}
       
        
       <div className="divider"></div>
         <li className="hover:bg-[#b2c9e6] p-1 rounded-xl"><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
             <li className="hover:bg-[#b2c9e6] p-1 rounded-xl"><NavLink to="/shop"><SiInstructure></SiInstructure>Shop</NavLink></li>
             
    
             
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;