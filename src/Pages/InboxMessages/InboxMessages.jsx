import ChatBox from "../../Components/ChatBox/ChatBox";
import ChatList from "../../Components/ChatList/ChatList";
import ChatProfile from "../../Components/ChatProfile/ChatProfile";


const InboxMessages = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-flow-col">
                <div className='border  grid-cols-1 bg-slate-600'>
                  <ChatList></ChatList>
                </div>

                <div className='border grid-cols-10 bg-rose-300'>
                    <ChatBox></ChatBox>
                </div>

                <div className='border grid-cols-1 bg-slate-600'>
                     <ChatProfile></ChatProfile>
                </div>
            </div>
        </div>
    );
};

export default InboxMessages;