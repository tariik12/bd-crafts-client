import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageUser = () => {








    
    const { data: users = [],refetch} = useQuery(["users"], async () => {
    
        const res = await fetch(`${import.meta.env.VITE_URL}/allusers`);
        return res.json();
      });
      console.log(users);

      const handleDelete = (user) => {
        console.log(user);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it.!'
        }).then((result) => {
          
            if (result.isConfirmed) {
           
                fetch(`${import.meta.env.VITE_URL}/manageUser/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                
                            )
                        }
                    })
            }
        })
    }




    return (
        <div>
                              <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
       
        <th>NO</th>
        <th>User Info</th>
        <th>User Name</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users?.map((user,i)=> <tr key={user?._id} >
        <td>
        {i+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photo} />
              </div>
            </div>
            
          </div>
        </td>
        <td>
        {user?.displayName}
        </td>
        <td>
        {user?.role}
        </td>
        
        <td>
          <button onClick={() => handleDelete(user)} className="p-3 rounded-full bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
      }
     
   
    </tbody>
   
  </table>
</div>

        </div>
    );
};

export default ManageUser;