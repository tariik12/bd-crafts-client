import { useEffect, useState } from "react";
import { BsFillChatDotsFill, BsFillChatFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import OnlineFriends from "../../../OnlineFriends/OnlineFriends";
import LeftSideMsgList from "./LeftSideMsgList";
import { FaSistrix } from "react-icons/fa6";


const LeftSide = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL}/allFakeFriend`)
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    const onlineFriend = friends?.filter(friend => friend?.status === "online");
    console.log(onlineFriend);
    return (
        <div className="flex">
            <div className="w-16 border-r-2 border-black">

                <label>
                    <div className="hover:bg-[#dfe5ee] rounded-lg p-5 tooltip tooltip-bottom" data-tip="messages">

                        <BsFillChatFill className="text-white " size={23}></BsFillChatFill>
                    </div>
                </label>
                <label>
                    <div className="hover:bg-[#dfe5ee] rounded-lg p-5 tooltip tooltip-bottom" data-tip="messages">

                        <HiUsers className="text-white " size={23}></HiUsers>
                    </div>
                </label>
                <label>
                    <div className="hover:bg-[#dfe5ee] rounded-lg p-5 tooltip tooltip-bottom" data-tip="messages">

                        <BsFillChatDotsFill className="text-white " size={23}></BsFillChatDotsFill>
                    </div>
                </label>

                <p className="mb-3 border-b-2 border-black w-full"></p>
                <div className="">
                    <p className="font-mono font-bold px-1">Online</p>
                    {
                        onlineFriend?.map(f => <OnlineFriends key={f?._id} f={f}></OnlineFriends>)
                    }

                </div>
            </div>
            {/* messages list */}

            <div>
                <div>
                    <h1 className="font-mono mt-3 mx-3 text-3xl p-3">Chat</h1>
                    <div className=" w-full px-5 rounded-full  transition cursor-pointer relative">
                        <div className="form-control ">
                            <input
                                type="text"
                                placeholder="Search mesenger"
                                className="input border h-[39px] border-white rounded-full bg-[#FFF] text-black px-10"
                            />
                        </div>
                        <div className="absolute -mt-[28px] ml-3 ">
                            <FaSistrix size={22} />
                        </div>
                    </div>

                </div>

                {
                    friends?.map(f => <LeftSideMsgList key={f?._id} f={f} />)
                }


            </div>


        </div>
    );
};

export default LeftSide;