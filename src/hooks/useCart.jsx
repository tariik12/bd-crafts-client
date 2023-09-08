import { useQuery } from '@tanstack/react-query'

import useAuth from './useAuth';


const useCart = () => {
 const {user}=useAuth();
 const { data: carts = [], refetch } = useQuery(["carts"], async () => {
      const res = await fetch(`${import.meta.env.VITE_URL}/cartsData?email=${user?.email}`);
      
      return res.json();
    });
    return [carts,refetch]
};

export default useCart;