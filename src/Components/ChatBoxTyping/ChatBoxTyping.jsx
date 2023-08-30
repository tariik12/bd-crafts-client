import React, { useContext, useRef, useState } from "react";
import { FaImage, FaIcons } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase.config"; 

const ChatBoxTyping = () => {
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef(null);

  const sendMassage = async (e) => {
    e.preventDefault();

    if (input === "" && imageURL === "") {
      alert("Please enter a valid message or select an image");
      return;
    }

    const { uid, displayName, photoURL } = user;
    await addDoc(collection(db, "massages"), {
      text: input,
      name: displayName,
      uid: uid,
      timestamp: serverTimestamp(),
      photoURL: photoURL,
      image: imageURL, 
    });
    setInput("");
    setImageURL("");
  };

  const openImageFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.match("image.*")) {
      alert("Please select an image only");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const imageBase64 = reader.result;

      const storageRef = ref(storage, `images/${file.name}`);
      await uploadString(storageRef, imageBase64, "data_url");
      const downloadURL = await getDownloadURL(storageRef);
      setImageURL(downloadURL); 
      setInput(""); 
    };
  };

  return (
    <div className="w-full">
      <form onSubmit={sendMassage}>
        <div className="flex items-center px-3 py-2 rounded-lg ">
          <button
            onClick={openImageFile}
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <FaImage size={30}></FaImage>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleSendImage}
            />
            <span className="sr-only">Upload image</span>
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></input>
          <button className="btn bg-sky-950" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBoxTyping;
