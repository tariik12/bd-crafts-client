import axios from "axios";
import { useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Login from "../../Authentication/Login";
const ChatsPage = () => {
  const { user } = useAuth();

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID,
          "user-name": user?.email,
          "user-secret": user?.uid,
        },
      })
      .then(() => {})
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user?.email);
        formdata.append("username", user?.email);
        formdata.append("secret", user?.uid);
        getFile(user?.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": import.meta.env.VITE_CHAT_ENGINE_PRIVATE_KEY,
              },
            })
            .then(() => {})
            .catch((e) => console.log(e));
        });
      });
  }, [user]);

  return (
    <div>
      {user ? (
        <div className="chats-page">
          <div className="nav-bar"></div>
          <div className="logo-tab">
            <Link to="/">bdCrafts</Link>
          </div>

          <ChatEngine
            height="calc(100vh-66px)"
            projectID={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
            userName={user?.email}
            userSecret={user?.uid}
          />
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};

export default ChatsPage;
