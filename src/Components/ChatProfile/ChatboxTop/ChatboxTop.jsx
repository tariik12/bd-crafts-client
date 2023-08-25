
import { FaInfo, FaPhone, FaVideo } from "react-icons/fa";

const ChatboxTop = () => {
    return (
        <div className="flex justify-between p-2 bg-[#98c5ff]">
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://i.ibb.co/308FGcq/Ahaduzzaman-profile1.png"
            alt=""
          />
          <div className="font-medium dark:text-white">
            <div>Jese Leos</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </div>
  
        <div className="flex">
          <div className="flex justify-center items-center gap-3">
            <span className="border rounded-full p-2"><FaPhone size={20}></FaPhone></span>
            <span className="border rounded-full p-2"><FaVideo size={20}></FaVideo></span>
            <span className="border rounded-full p-2"><FaInfo size={20}></FaInfo></span>
          </div>
        </div>
      </div>
    );
};

export default ChatboxTop;