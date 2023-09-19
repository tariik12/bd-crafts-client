import "./MsgApp.css";

import useAuth from "../../../hooks/useAuth";
import Login from "../../Authentication/Login";
import ChatsPage from "../ChatPage/ChatsPage";

function App() {
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  } else {
    return <ChatsPage />;
  }
}

export default App;
