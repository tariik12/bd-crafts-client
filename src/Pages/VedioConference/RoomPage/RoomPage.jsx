
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import Loader from "../../../Components/Loader";
import { Link, useParams } from "react-router-dom";


const RoomPage = () => {
    const {roomCode} = useParams()
    const {user,loading}=useContext(AuthContext);
    if(loading){
        <Loader></Loader>
    }
  
   const myMeeting =async(element)=>{
    const appID = parseInt(import.meta.env.VITE_ZEGO_CLOUD_APP_ID);
 const serverSecret = import.meta.env.VITE_ZEGO_CLOUD_SERVER_SECRET;
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomCode,user?.uid,user?.displayName);
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomCode,
      },
    ],
    scenario: {
     mode: ZegoUIKitPrebuilt.VideoConference,
    },
});
   }
   
    return (
        <div>
      
        <div className="chats-page">
          <div className="nav-bar"></div>
          <div  className="logo-tab">
          <Link to="/">bdCrafts</Link>
          </div>
          
          <div  className="logout-tab"><Link to="/">Return Home</Link> </div>
          <div ref={myMeeting}/>
        </div>
   
    </div>
    );
};

export default RoomPage;