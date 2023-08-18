import { useEffect, useState } from "react";
import SectionTitle from "../Share/SectionTitle";

const AddFriend = () => {
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
        <div>
            <SectionTitle
                subHeading={" "}
                heading={"People You May Know"}
            ></SectionTitle>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    addFriends.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={data.Profile_image} alt="User Profile" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{data.Name}</h2>
                            <div className="card-actions ">
                                <button className="btn btn-primary  ">Add Friend</button>
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

export default AddFriend;