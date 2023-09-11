import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Loader from "../../../Components/Loader";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";


const Live = () => {
    const {roomId} = useParams()
    const {user,loading}=useContext(AuthContext);
    if(loading){
        <Loader></Loader>
    }
     function getUrlParams(
        url = window.location.href
      ) {
        let urlStr = url.split('?')[1];
        return new URLSearchParams(urlStr);
      }
      const myMeeting =async(element)=>{
          let role_str = getUrlParams(window.location.href).get('role') || 'Host';
          let role = getUrlParams(window.location.href)['role'] || 'Host';
  
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:
        window.location.protocol + '//' + 
        window.location.host + window.location.pathname +
        '?roomID=' +
        roomId +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:
     window.location.protocol + '//' + 
     window.location.host + window.location.pathname +
      '?roomID=' +
      roomId +
      '&role=Audience',
  });
    const appID = parseInt(import.meta.env.VITE_ZEGO_CLOUD_Live_APP_ID);
 const serverSecret = import.meta.env.VITE_ZEGO_CLOUD_Live_SERVER_SECRET;
 const TOKEN =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,user?.uid,user?.displayName);

 role = role === 'Host' ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;
 let config = {}
 if(role === 'Host'){
     config = {
        turnOnCameraWhenJoining: true,
        showMyCameraToggleButton: true,
        showAudioVideoSettingsButton: true,
        showScreenSharingButton: true,
        showTextChat: true,
        showUserList: true,
  }
 }
 const zp = ZegoUIKitPrebuilt.create(TOKEN);
 zp.joinRoom({
     container: element,
     scenario: {
         mode: ZegoUIKitPrebuilt.LiveStreaming,
         config: {
                     role,
         },
     },
     sharedLinks: [{
         name: 'Join as an audience',
         url:
         window.location.origin +
         window.location.pathname +
         '?roomID=' +
         roomId +
         '&role=Audience',
     }],
     ...config
     });
   }
    return (
        <div>
            
          <div ref={myMeeting}/>
        
        </div>
    );
};

export default Live;