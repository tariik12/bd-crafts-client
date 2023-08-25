import React from "react";
import Chat from "../Chat/Chat";
import ChatBoxTyping from "../ChatBoxTyping/ChatBoxTyping";
import ChatboxTop from "../ChatProfile/ChatboxTop/ChatboxTop";

const ChatBox = () => {
  return (
    <div className="bg-green-200 ">
      <div >
        <ChatboxTop></ChatboxTop>
      </div>
      <div className="px-5">
        <Chat></Chat>
      </div>
      <div className="bottom-0 fixed">
        <ChatBoxTyping></ChatBoxTyping>
      </div>
    </div>
  );
};

export default ChatBox;
