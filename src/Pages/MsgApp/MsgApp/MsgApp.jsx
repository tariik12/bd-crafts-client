

import "./MsgApp.css";

import ChatsPage from "../ChatPage/ChatsPage";
import useAuth from "../../../hooks/useAuth";
import Login from "../../Authentication/Login";


function App() {

const {user} =useAuth()

  if (!user) {
    return <Login/>;
  } else {
    return <ChatsPage  />;
  }
}

export default App;