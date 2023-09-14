const UserProfileName = ({ name }) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-bold text-black">{name}</h1>
        <p className="text-xl font-semibold text-gray-500">@mahadi_mh</p>
        <div className="flex gap-8 text-xl font-semibold text-gray-500">
          <p>100 Followers</p>
          <p>100 Following</p>
        </div>
      </div>
    </>
  );
};

export default UserProfileName;
