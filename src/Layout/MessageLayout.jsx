import ChatBox from "../Components/ChatBox/ChatBox";
import ChatListNew from "../Components/Messeges/Messages/LeftSide/ChatListNew";
import IconBer from "../Components/Messeges/Messages/LeftSide/IconBer";

const MessageLayout = () => {
   return (
    <>
      <div className="flex flex-row">
        <div className="h-full w-22" >
          <IconBer></IconBer>
        </div>

        <div className="h-full w-80">
          <ChatListNew></ChatListNew>
        </div>

        <div className="h-full flex-grow bg-slate-500">
          <ChatBox></ChatBox>
        </div>
      </div>
    </>
  );
};

export default MessageLayout;
