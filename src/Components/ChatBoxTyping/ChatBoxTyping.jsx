import  { useContext, useState } from "react";
import { FaIcons, FaImage } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase.config";

const ChatBoxTyping = () => {
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const sendMassage = async (e) => {
    e.preventDefault();
    if (input == "") {
      alert("Please enter a valid massage");
      return;
    }
    const { uid, displayName, photoURL } = user;
    await addDoc(collection(db, "massages"), {
      text: input,
      name: displayName,
      uid: uid,
      timestamp: serverTimestamp(),
      photoURL: photoURL,
    });
    setInput('')
    scroll.current.scrollIntoView({ bahavior: "smooth" });
  };
  return (
    <div className="w-full">
      <form onSubmit={sendMassage}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg ">
          <button
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <FaImage size={30}></FaImage>
            <span className="sr-only">Upload image</span>
          </button>
          <button
            type="button"
            className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <FaIcons size={20}></FaIcons>
            <span className="sr-only">Add emoji</span>
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></input>
          <button className="btn bg-sky-950" type="submit">Send</button>
        
        </div>
      </form>
    </div>
  );
};

export default ChatBoxTyping;
