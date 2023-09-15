import { FaExternalLinkAlt } from "react-icons/fa";

const AboutCard = ({ birthDate, location, relation, religion, working }) => {
  return (
    <>
      <div className="bg-blue-100 rounded-xl p-4 my-5">
        <h1 className="text-black text-2xl font-bold mb-2">About</h1>
        <div className="text-xl">
          <p className="text-black flex gap-2">
            <FaExternalLinkAlt /> Working at
            <span>{working}</span>
          </p>
          <p className="text-black flex gap-2">
            <FaExternalLinkAlt /> From
            <span>{location}</span>
          </p>
          <p className="text-black flex gap-2">
            <FaExternalLinkAlt /> Date of Birth
            <span>{birthDate}</span>
          </p>
          <p className="text-black flex gap-2">
            <FaExternalLinkAlt /> Relationship
            <span> {relation}</span>
          </p>
          <p className="text-black flex gap-2">
            <FaExternalLinkAlt /> Religion
            <span>{religion}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
