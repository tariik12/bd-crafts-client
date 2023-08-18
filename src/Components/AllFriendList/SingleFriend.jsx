const SingleFriend = ({ friend }) => {
  const { profilePicture, fullName } = friend;
  return (
    <div className="flex gap-2 items-center py-2">
      <img src={profilePicture} alt="" className="w-10 h-10 rounded-full " />
      <p className="text-xl font-semibold">{fullName}</p>
    </div>
  );
};

export default SingleFriend;
