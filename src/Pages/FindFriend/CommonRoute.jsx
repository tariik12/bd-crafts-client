import React from 'react';
import { Link } from 'react-router-dom';

const CommonRoute = () => {
    return (
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
    );
};

export default CommonRoute;