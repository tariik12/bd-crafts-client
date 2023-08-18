

import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const {handleGoogleProvider} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname ||"/";
    const handleGoogleSingIn =() =>{
      handleGoogleProvider()
        .then(result =>{
             const loggedUser =(result.user)
             console.log(loggedUser)
            if(loggedUser){
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
            .then(res => res.json())
            .then((data) => {
               console.log(data)
                    navigate(from, {replace:true});
                    toast.success('login success')
                
            })
            }
        })
        .catch(error =>console.log(error.message))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="  my-4">
            <button onClick={handleGoogleSingIn} className="btn rounded-3xl  btn-sm px-4 ">
            Login Google  
            <FaGoogle/> 
              
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;