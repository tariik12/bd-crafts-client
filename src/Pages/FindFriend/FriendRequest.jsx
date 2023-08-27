
import { useEffect, useState } from "react";
import SectionTitle from "../Share/SectionTitle";

const FriendRequest = () => {
    const [addFriends, SetAddFriends] = useState([]);

    useEffect(() => {
        fetch('addFriend.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetAddFriends(data);
            })
    }, [])


    return (
        <div className="bg-slate-100">
            <SectionTitle
                subHeading={" "}
                heading={"Friend Request"}
            ></SectionTitle>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    addFriends.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.Profile_image} alt="User Profile" className="rounded-xl h-52 w-60" />
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

        </div>
    );
};

export default FriendRequest;