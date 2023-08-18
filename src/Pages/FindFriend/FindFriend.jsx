import { useEffect, useState } from "react";


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
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {
                findFriends.map(data => <div key={data._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={data.Profile_image} alt="Usser Profile" className="rounded-xl" />
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
    );
};

export default FindFriend;