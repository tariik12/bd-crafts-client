import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Privacy = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-400 bg-opacity-30 h-screen ">
      <div className="px-4  overflow-y-auto">
        <h2 className="text-2xl font-bold">Privacy Center</h2>
        <p className="text-[#000000] text-opacity-60 my-4">
          Make the privacy choices that are right for you. Learn how to manage
          and control your privacy on BdCrafts.
        </p>
        <div className="flex justify-between items-center  py-2 bg-[#FFF] px-4 rounded-lg">
          <div className="flex gap-4">
            <img
              src={user?.photoURL}
              className="w-12 h-12 rounded-full"
              alt="profile"
            />
            <div>
              <h3>See your accounts</h3>
              <h3>{user?.displayName}</h3>
            </div>
          </div>
          <span>
            <FaAngleRight />
          </span>
        </div>
        {/* explore guides card  */}
        <h2 className="my-8">Explore Guides</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="card card-compact lg:w-96 mx-auto bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img
                className="w-full h-[260px]"
                src="https://media.istockphoto.com/id/1289956604/photo/digital-security-concept.jpg?s=612x612&w=0&k=20&c=DDHKGonX7oLV52cssLx9Ptber1JC6VIOwalvbBPmgOU="
                alt="img"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-lg">Safety</h2>
              <p className="text-[18px] my-2 font-semibold">
                Protecting yourself and your all information
              </p>
              <div className="card-actions">
                <button className="btn w-full rounded-full border border-white capitalize text-black text-opacity-70 text-[18px]">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact lg:w-96 mx-auto bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img
                className="w-full h-[260px]"
                src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?w=2000"
                alt="img"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-lg">Security</h2>
              <p className="text-[18px] my-2 font-semibold">
                Keeping your information secure protects your privacy
              </p>
              <div className="card-actions">
                <button className="btn w-full rounded-full border border-white capitalize text-black text-opacity-70 text-[18px]">
                  Get started
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact lg:w-96 mx-auto bg-base-100 shadow-xl cursor-pointer">
            <figure>
              <img
                className="w-full h-[260px]"
                src="https://media.istockphoto.com/id/1453891802/photo/cybersecurity-and-privacy-concepts-to-protect-data-lock-icon-and-internet-network-security.webp?b=1&s=170667a&w=0&k=20&c=yZjrgvkLfyEOeg1Opks69xGCnSZtPqMtUnVV0-ocqV0="
                alt="img"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-lg">use</h2>
              <p className="text-[18px] my-2 font-semibold">
                Learn how we use your information
              </p>
              <div className="card-actions">
                <button className="btn w-full rounded-full border border-white capitalize text-black text-opacity-70 text-[18px]">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
