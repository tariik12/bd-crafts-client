import { FaExternalLinkAlt } from "react-icons/fa";

const AboutCard = () => {
  return (
    <>
      <div className="bg-blue-100 rounded-xl p-4 my-5">
        <h1 className="text-[#7BB4FF] text-2xl font-bold mb-2">About</h1>
        <div className="text-xl">
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> Working at
            <span>Mahadi Handy Crafts Limited</span>
          </p>
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> From
            <span> Savar, Dhaka</span>
          </p>
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> Joined
            <span> 25 March,2025</span>
          </p>
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> Relationship
            <span> Single</span>
          </p>
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> Date of Birth
            <span> 05 March 1998</span>
          </p>
          <p className="text-[#417FF8] flex gap-2">
            <FaExternalLinkAlt /> Religion
            <span>Islam</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
