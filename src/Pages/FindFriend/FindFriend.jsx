import { useEffect, useState } from "react";
// import AddFriend from "./AddFriend";
// import SectionTitle from "../Share/SectionTitle";
import { Link } from "react-router-dom";
import './FindFriend.css';


const FindFriend = () => {

    const [findFriends, setFindFriends] = useState([]);

    useEffect(() => {
        fetch('findFriends.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFindFriends(data);
            })
    }, [])


    return (
        <div className="bg-slate-200 flex flx-col ">
            <div className="grid  grid-flow-col lg:grid-row-reverse mt-5 w-25">
                <div className="grid-cols-3 w-[300px] px-5" >
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
                <div className="grid-cols-9 cart">
                    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-75">

                        {
                            findFriends.map(data => <div key={data._id} className="card w-80 h-72 bg-base-100 shadow-sm  mb-2 pb-2 ml-2">
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
            </div>

        </div>


    );
};

export default FindFriend;
