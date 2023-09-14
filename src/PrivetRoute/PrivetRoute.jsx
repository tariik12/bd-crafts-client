
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import useAuth from "../hooks/useAuth";


const PrivetRoute = ({children}) => {
    const {loader,user} =useAuth()
    const location = useLocation();
   
 if(loader){
            return <Loader/>
        }
        
          if (user) {
            return children;
          } else{
            Swal.fire({
                title: 'error!',
                text: 'You have to log in first to go this page',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              return <Navigate to="/login" state={{ from: location }} replace></Navigate>
          }
};

export default PrivetRoute;