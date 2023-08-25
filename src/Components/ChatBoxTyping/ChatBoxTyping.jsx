import React, { useContext, useState } from "react";
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
    <div className="">
      <form onSubmit={sendMassage}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
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
          <button type="submit">Send</button>
          {/* <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5 rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button> */}
        </div>
      </form>
    </div>
  );
};

export default ChatBoxTyping;
