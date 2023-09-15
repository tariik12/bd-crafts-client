import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AddFriend = () => {
    const [addFriends, SetAddFriends] = useState([]);
    console.log(addFriends)
    const { user } = useContext(AuthContext);
    console.log(user);


    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/allusers`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetAddFriends(data);
            })
    }, [])

    const handleAddFriend = (id) => {
        console.log(id);
    }



    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_URL}/allFriend/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success) {
                            
                            Swal.fire(
                                'Deleted!',
                                'The user has been deleted.',
                                'success'
                            );
                        } 
                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                    });
            }
        });
    };



    return (
        <div className="  flex">


            <div className="  px-5" >
                <Link to='/'>
                    <h3 className="text-4xl font-serif cursor-pointer my-2">Home</h3>
                </Link>
                <Link to="/friendRequest">
                    <h3 className="text-4xl font-serif cursor-pointer my-2" >Friend Request</h3>
                </Link>

                <Link to="/allFriend">
                    <h3 className="text-4xl font-serif cursor-pointer my-2">All  Friend</h3>
                </Link>

                <Link to="/addFriend">
                    <h3 className="text-4xl font-serif cursor-pointer my-2">Add friend</h3>
                </Link>
                <Link to="/createGroup">
                    <h3 className="text-4xl font-serif cursor-pointer my-2">Create Group</h3>
                </Link>
            </div>



            {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"> */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                {
                    addFriends?.map(data => <div key={data._id} className="card w-64  shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.photo} alt="User Profile" className="rounded-xl h-52 w-60" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.name}</h2>
                            <div className="card-actions  flex-col">
                                <button className="btn btn-primary w-48" onClick={() => handleAddFriend(data._id)}>Add Friend</button>
                                <button className="btn btn-primary w-48" onClick={() => handleDelete(data._id)}>Delete</button>
                            </div>
                        </div>
                    </div>

                    )

                }

            </div>

        </div>
    );
};

export default AddFriend;