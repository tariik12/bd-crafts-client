const ProfileBanner = ({
  coverPhoto,
  profilePicture,
  fullName,
  userName,
  friendsCount,
  followersCount,
}) => {
  return (
    <>
      <section>
        <div className="">
          <div>
            <img src={coverPhoto} alt="cover photo" className="w-full h-96" />
          </div>
        </div>
        <div className="w-4/5 mb-7 -my-6 mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <img
              src={profilePicture}
              alt="profile photo"
              className="w-36 h-36 rounded-full"
            />
            <div className="flex flex-col">
              <h1 className="font-semibold text-3xl">{fullName}</h1>
              <p className="font-semibold text-xl">{userName}</p>
            </div>
            <p>Followers: {followersCount}</p>
            <p>Friends: {friendsCount}</p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-info">Add Friend</button>
            <button className="btn btn-success">Follow</button>
            <button className="btn btn-warning">Message</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileBanner;
