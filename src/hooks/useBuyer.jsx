import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useBuyer = () => {
    const {user,loader}=useAuth();
    const {data:isBuyer,isBuyerLoading}=useQuery({
        queryKey:['isBuyer',user?.email],
        enabled:!loader,
        queryFn:async ()=>{
            const res=await axios.get(`${import.meta.env.VITE_URL}/buyerRole/${user?.email}`)
            return res.data.seller;
        }
    })
    return [isBuyer,isBuyerLoading]
};

export default useBuyer;