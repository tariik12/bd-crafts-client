import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileFunction = () => {
  return (
    <>
      <div className="bg-blue-100 rounded-xl p-4 my-5">
        <h1 className="text-[#7BB4FF] text-xl font-bold mb-2">Functions</h1>
        <p className="text-[#417FF8] flex gap-2">
          <FaExternalLinkAlt /> Edit Profile
        </p>
        <p className="text-[#417FF8] flex gap-2">
          <FaExternalLinkAlt />
          Manage Your Groups
        </p>
      </div>
    </>
  );
};

export default ProfileFunction;
