import { Link } from "react-router-dom";

const CreateGroup = () => {
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
           <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 ">
           <div className="card card-compact w-72 bg-yellow-600 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_EqM3188dtZjTIR_My4tg___64CDmIY2Qg&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Wood craft</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Group</button>
                    </div>
                </div>
            </div>
           <div className=" bg-yellow-600 card card-compact w-72 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe2Dyd1E3e45UoDamCj3EBZJf5JgYPvUhNcA&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Mud craft</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Group</button>
                    </div>
                </div>
            </div>
           <div className="card card-compact w-72 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Wood craft</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Join Group</button>
                    </div>
                </div>
            </div>
           </div>

        </div>
    );
};

export default CreateGroup;