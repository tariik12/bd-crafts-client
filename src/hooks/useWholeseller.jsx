import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useWholeseller = () => {
    const {user,loader}=useAuth();
   
        const {data:isWholeseller,isWholesellerLoading}=useQuery({
            queryKey:['isWholeseller',user?.email],
            enabled:!loader,
            queryFn:async ()=>{
                const res=await axios.get(`${import.meta.env.VITE_URL}/wholesellerRole/${user?.email}`)
                return res.data.wholeseller;
            }
        })
        return [isWholeseller,isWholesellerLoading]
    
};

export default useWholeseller;