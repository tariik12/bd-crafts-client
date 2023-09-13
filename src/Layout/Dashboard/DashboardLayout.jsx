import { FaHome ,FaShopify,FaChessBishop} from "react-icons/fa";

import { GiShoppingCart,GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";
import { SiInstructure} from "react-icons/si";
import {FcShop } from "react-icons/fc";

import { NavLink, Outlet } from "react-router-dom";
import useSeller from "../../hooks/useSeller";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";
import Loader from "../../Components/Loader";





const DashboardLayout = () => {

const isWholeseller =false;
const [isSeller,isSellerLoading] = useSeller();
const [isAdmin,isLoading] = useAdmin();
const [carts]=useCart()

if(isLoading || isSellerLoading ){
  return <Loader />
}

    return (
        <div className="drawer lg:drawer-open">
    <label htmlFor="my-drawer-2" className="btn btn-primary m-3 drawer-button lg:hidden"><GiHamburgerMenu></GiHamburgerMenu></label>
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col  ">

    {/* Page content here */}
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side  ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-[#eaf0f9] text-base-content font-bold">
      {/* Sidebar content here */}

      {isAdmin &&(
            <>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="manageShop"><FcShop></FcShop> Manage Products</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="pendingSeller"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>Pending Sellers</NavLink>
              </li>
              <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                <NavLink to="manageUser"><AiOutlineUsergroupAdd></AiOutlineUsergroupAdd>Manage Users</NavLink>
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
          {!isAdmin && !isSeller && (
            <>
             <div  className="hover:bg-[#b2c9e6]   p-1 rounded-xl">
                <li>
                <NavLink to="myCart"><GiShoppingCart size={23}></GiShoppingCart><div className="badge relative right-36 bottom-3 badge-secondary">+{carts?.length || 0}</div>
                <div>MyCart </div>
                 </NavLink>
                
                </li>
              </div>
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