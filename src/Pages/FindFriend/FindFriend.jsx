import { useEffect, useState } from "react";
import AddFriend from "./AddFriend";
import SectionTitle from "../Share/SectionTitle";
import { Link } from "react-router-dom";


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
        <div>
            <div className="grid grid-flow-col mt-5">
             <div className="grid-cols-3 w-[300px] px-5" >
                <Link to='/'>
               <h3 className="text-4xl font-serif cursor-pointer my-2">Home</h3>
                </Link>
               <h3 className="text-4xl font-serif cursor-pointer my-2" >Friend Request</h3>
               <h3 className="text-4xl font-serif cursor-pointer my-2">All  Friend</h3>
               <h3 className="text-4xl font-serif cursor-pointer my-2">Add friend</h3>
               <h3 className="text-4xl font-serif cursor-pointer my-2">Create Group</h3>
                </div>
                <div className="grid-cols-9">
middle
                </div>
            </div>
            
            <SectionTitle
                subHeading={" "}
                heading={"Find Friends"}
            ></SectionTitle>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    findFriends.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.Profile_image} alt="User Profile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.Name}</h2>
                            <div className="card-actions ">
                                <button className="btn btn-primary  ">Confirm</button>
                                <button className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>

                    )

                }

            </div>
            <AddFriend></AddFriend>
        </div>


    );
};

export default FindFriend;