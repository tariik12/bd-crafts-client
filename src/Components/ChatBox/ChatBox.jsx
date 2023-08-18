import React from "react";
import ChatboxTop from "../ChatProfile/ChatboxTop/ChatboxTop";
import ChatBoxText from "../ChatBoxText/ChatBoxText";
import ChatBoxTyping from "../ChatBoxTyping/ChatBoxTyping";

const ChatBox = () => {
  return (
    <div className="bg-green-200 ">
      <div >
        <ChatboxTop></ChatboxTop>
      </div>
      <div className="px-5">
        <ChatBoxText></ChatBoxText>
      </div>
      <div className="">
        <ChatBoxTyping></ChatBoxTyping>
      </div>
    </div>
  );
};

export default ChatBox;
