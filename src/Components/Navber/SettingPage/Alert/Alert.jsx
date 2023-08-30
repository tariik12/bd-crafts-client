
import { FaExclamation } from "react-icons/fa6";

const Alert = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[647px] h-[706px] w-full mx-auto overflow-hidden">
      <div className="bg-yellow-200 bg-opacity-20 p-20">
        <div className="flex justify-center items-center">
          <div className="h-[134px] w-[134px] items-center flex justify-center bg-[#030229] bg-opacity-10 rounded-full cursor-pointer">
            <FaExclamation className="w-[40px] h-[40px] text-[#030229]" />
          </div>
        </div>
        <div className="flex items-center flex-col justify-center space-y-8 mt-[20px]">
          <h3 className="lg:text-[50px] text-[30px] text-center">Are you sure?</h3>
          <span>You won’t able to revert this !</span>
          <div className="flex  gap-4">
            <button className="bg-[#417FF8] lg:w-[211px] w-[180px] mx-auto h-[57px] rounded-[10px]">
              Yes,delete it!
            </button>
            <button className="bg-[#F81111] lg:w-[156px] w-[100px] mx-auto h-[57px] rounded-[10px]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
