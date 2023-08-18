import { useEffect, useState } from "react";
import DisplayFriend from "../../../Components/DisplayFriend/DisplayFriend";
import OnlineFriends from "../../../Components/OnlineFriends/OnlineFriends";

const RightSideBar = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_URL}/allfriends`)
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
      });
  }, []);

  const onlineFriends = friends?.filter(
    (onlineFriend) => onlineFriend.status === "online"
  );

  return (
    <div className="mt-3">
      <div className="grid grid-cols-1">
        <h1 className="text-xl font-bold">All Friends</h1>
        {friends?.map((friend) => (
          <DisplayFriend key={friend?._id} friend={friend} />
        ))}
        <p className="  border-b-2  w-full  border-black  mt-1 mb-3 "></p>
      </div>
      <div className="grid grid-cols-1">
        <h1 className="text-xl font-bold">Online Friends</h1>

        {onlineFriends?.map((friend) => (
          <OnlineFriends key={friend?._id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default RightSideBar;
