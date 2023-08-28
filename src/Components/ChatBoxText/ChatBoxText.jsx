import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import app from "../../../firebase.config";
import { AuthContext } from "../../Provider/AuthProvider";

const style = {
  massagestyle: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full mb-16 `,

  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full `,
};

const ChatBoxText = ({ massage }) => {
  console.log(massage);
  const {user} = useContext(AuthContext)
  const massageClass = massage?.uid === user?.uid 
  ? `${style.sent}` : `${style.received}`

  return (
    <div className="">
      <div className={`${style.massagestyle} ${massageClass}`}>
        <div>
          <img
            className="rounded-full w-12 h-12  "
            src={massage?.photoURL}
            alt=""
          />
        </div>
        <div>
          <p className="text-gray-400 mb-1">{massage?.name}</p>
          <p className="text-xl ">{massage?.text}</p>
        </div>
      </div>
      <div className="text-right" >

      
      {
        massage?.image ? 
        <div>
          <img
            className="rounded w-32 h-32 shadow-2xl shadow-black"
            src={massage?.image ? massage.image : ""}
            alt=""
          />
        </div>
        :
        ""
      }
      </div>
      
    </div>
  );
};

export default ChatBoxText;
