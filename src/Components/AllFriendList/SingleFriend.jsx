import { Link } from "react-router-dom";

const SingleFriend = ({ friend }) => {
  const { profilePicture, fullName } = friend;
  return (
    <div className="flex gap-2 items-center py-2">
      <img src={profilePicture} alt="" className="w-10 h-10 rounded-full " />
      <Link
        to="/"
        className="text-xl font-semibold hover:underline hover:text-blue-500"
      >
        {fullName}
      </Link>
    </div>
  );
};

export default SingleFriend;
