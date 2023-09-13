

import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
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
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL , role:'user'}
            fetch(`${import.meta.env.VITE_URL}/users`, {
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
        <div className="mt-5">
            <div className="flex gap-3">
            <button onClick={handleGoogleSingIn} className="border border-primary text-xs font-thin w-[160px] rounded-3xl flex btn-sm items-center">
           <div className="mx-auto flex items-center">
           <FcGoogle className="text-lg font-serif"/> 
           <p className="ms-1"> Login up with Google  </p>
           </div>
              
            </button>
            <button onClick={handleGoogleSingIn} className="hover:bg-transparent border border-primary text-xs font-thin w-[160px] rounded-3xl flex btn-sm items-center ">
            <div className="mx-auto flex items-center">
           <BiLogoFacebookCircle className="text-lg text-[#1589FF]"/> 
           <p className="ms-1"> Sing up with facebook  </p>
           </div>
            </button>
            </div>
            <p className="text-center mt-3 text-2xl font-serif">-OR-</p>
        </div>
    );
};

export default SocialLogin;