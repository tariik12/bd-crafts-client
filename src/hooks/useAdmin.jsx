import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import useAuth from "./useAuth";


const useAdmin = () => {
    const {user, loader} = useAuth();
    
   
    const {data: isAdmin,isLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_URL}/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin,isLoading]
}
export default useAdmin;