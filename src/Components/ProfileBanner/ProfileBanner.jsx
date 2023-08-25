const ProfileBanner = ({ coverPhoto, profilePicture }) => {
  return (
    <>
      <section className="">
        <div className="mt-3">
          <div>
            <img
              src={coverPhoto}
              alt="cover photo"
              className="w-full h-96 rounded-xl"
            />
          </div>
        </div>
        <div className="w-4/5 mb-7 -my-10 mx-auto flex justify-between items-center">
          <div className="flex justify-between items-center gap-5">
            <img
              src={profilePicture}
              alt="profile photo"
              className="w-36 h-36 rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileBanner;
