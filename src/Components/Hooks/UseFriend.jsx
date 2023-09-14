import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const UseFriend = () => {
    const { user } = useContext(AuthContext)


    const { data: users = [], refetch } = useQuery({
        queryKey: ['allusers'],
      
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/allusers`)
            // console.log(response,"13");
            return response.json();
        },
    })

    console.log(users);
    return [users,refetch];
};

export default UseFriend;