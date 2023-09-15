
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FriendRequest = () => {
    const [addFriends, SetAddFriends] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/allFriendRequestLink`)
            // fetch('addFriend.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetAddFriends(data);
            })
    }, [])

    return (
        <div className="bg-slate-100">
          
            <div className="bg-green-500  " >
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


            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    addFriends.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.Profile_image} alt="User Profile" className="rounded-xl h-52 w-60" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.Name}</h2>
                            <div className="card-actions ">
                                <button className="btn btn-primary bg-green-600  text-white hover:text-black hover:bg-green-500 font-bold">Confirm</button>
                                <button className="btn btn-primary bg-gray-700 text-white hover:bg-gray-700">Delete</button>
                            </div>
                        </div>
                    </div>

                    )

                }

            </div>

        </div>
    );
};

export default FriendRequest;