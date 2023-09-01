
import Chat from "../Chat/Chat";
import ChatBoxTyping from "../ChatBoxTyping/ChatBoxTyping";
import ChatboxTop from "../ChatProfile/ChatboxTop/ChatboxTop";

const ChatBox = () => {
  return (
    <div className=" w-full">
      <div >
        <ChatboxTop></ChatboxTop>
      </div>
      <div className="px-5">
        <Chat></Chat>
      </div>
      <div className="bottom-0 right-4 fixed w-3/4 bg-[#8196b1]">
        <ChatBoxTyping></ChatBoxTyping>
      </div>
    </div>
  );
};

export default ChatBox;
