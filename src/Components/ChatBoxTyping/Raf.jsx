import React, { useContext, useState, useRef, useEffect } from "react";
import { FaImage } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase.config";
import EmojiPicker from "@emoji-mart/react";

const ChatBoxTyping = () => {
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const fileInputRef = useRef(null);
  const chatBoxRef = useRef(null);

  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, 'images/' + file.name);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setSelectedImage(downloadURL);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input && !selectedImage && !selectedEmoji) {
      alert("Please enter a message, select an image, or choose an emoji before sending.");
      return;
    }

    const { displayName, photoURL } = user;

    const messageData = {
      text: input + selectedEmoji,
      name: displayName,
      timestamp: serverTimestamp(),
      photoURL: photoURL,
      image: selectedImage, // Include the image download URL
    };

    await addDoc(collection(db, "messages"), messageData);

    setSelectedEmoji("");
    setSelectedImage(null);
    setInput("");
  };

  const openImageFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const toggleEmojiPicker = () => {
    setIsEmojiPickerOpen(!isEmojiPickerOpen);
  };

  const closeEmojiPicker = () => {
    setIsEmojiPickerOpen(false);
  };

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji.native);
    setIsEmojiPickerOpen(false);
    setInput(input + emoji.native); // Append emoji to input field
  };

  const handleOutsideClick = (e) => {
    if (chatBoxRef.current && !chatBoxRef.current.contains(e.target)) {
      setIsEmojiPickerOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full" ref={chatBoxRef}>
      <form onSubmit={sendMessage}>
        <div className="flex items-center px-3 py-2 rounded-lg">
          <button
            type="button"
            onClick={openImageFile}
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            <FaImage size={30} />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleSendImage}
          />
          <button
            type="button"
            onClick={toggleEmojiPicker}
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
          >
            Emoji
          </button>
          <input
            value={input + selectedEmoji}
            onChange={(e) => setInput(e.target.value)}
            id="chat"
            rows="1"
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          />
          <button className="btn bg-sky-950" type="submit">
            Send
          </button>
        </div>
      </form>
      {isEmojiPickerOpen && (
        <div className="relative">
          <EmojiPicker onSelect={handleEmojiSelect} />
          <button
            onClick={closeEmojiPicker}
            className="absolute top-8 right-0 p-1 cursor-pointer font-bold text-red-400 border rounded bg-slate-200"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBoxTyping;
