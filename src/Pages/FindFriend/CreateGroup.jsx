import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateGroup = () => {
    const [groupData, setGroupData] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user);


    useEffect(() => {
        fetch('group.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGroupData(data);
            })
    }, []);





return (
    <div className=" flex sm:flex-col md:flex-row gap-2 ">
        <div className=" w-3/12 px-5 " >
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

        {/* Crad */}

        <div className="grid grid-cols-3 gap-5">
            {
                groupData.map(data => <div key={data._id}>
                    <div className="card card-compact w-72 bg-yellow-600 shadow-xl">
                        <figure><img src={data.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>

                            <div className="card-actions">
                                <button  className="btn btn-sm btn-error btn-outline border-0 border-y-2 mt-2">Craete Group</button>
                            </div>


                            {/* <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Create Group</button>
                                </div> */}
                        </div>
                    </div>

                </div>)
            }
        </div>


    </div>
);
};

export default CreateGroup;


