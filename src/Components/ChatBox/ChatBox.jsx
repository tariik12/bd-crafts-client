import Chat from "../Chat/Chat";
import ChatBoxTyping from "../ChatBoxTyping/ChatBoxTyping";
import ChatboxTop from "../ChatProfile/ChatboxTop/ChatboxTop";

const ChatBox = () => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <ChatboxTop></ChatboxTop>
      </div>
      <div className="flex-grow overflow-scroll">
        <Chat></Chat>
      </div>
      <div>
        <ChatBoxTyping></ChatBoxTyping>
      </div>
    </div>
  );
};

export default ChatBox;
