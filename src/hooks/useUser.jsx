import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useUser = () => {
    const {user,loader}=useAuth();
    const {data:isUser,isUserLoading}=useQuery({
        queryKey:['isUser',user?.email],
        enabled:!loader,
        queryFn:async ()=>{
            const res=await axios.get(`${import.meta.env.VITE_URL}/user/${user?.email}`)
            return res.data.seller;
        }
    })
    return [isUser,isUserLoading]
};

export default useUser;