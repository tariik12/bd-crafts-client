const ProfileBio = ({ bio }) => {
  return (
    <div className="bg-blue-100 rounded-xl p-4 my-5">
      <h1 className="text-[#7BB4FF] text-2xl font-bold mb-2">Bio</h1>
      <p className="text-[#417FF8] text-xl flex gap-2">{bio}</p>
    </div>
  );
};

export default ProfileBio;
