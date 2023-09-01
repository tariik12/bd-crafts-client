import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase.config";
import EmojiPicker from "emoji-picker-react";
import { FaIcons, FaImage } from "react-icons/fa";
import { BsSignStop } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { ReactMediaRecorder } from "react-media-recorder";

const style = {
  inputCls: `block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
  textEmojiBtn: `inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 bg-gray-200`,
};

const ChatBoxTyping = () => {
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);

  const fileInputRef = useRef(null);

  const sendMassage = async (e) => {
    e.preventDefault();

    if (input === "" && imageURL === "" && !recordedAudio) {
      alert("Please enter a valid message, select an image, or record audio");
      return;
    }

    console.log("Sending message with audio:", recordedAudio);

    const { uid, displayName, photoURL } = user;
    const messageData = {
      text: input,
      name: displayName,
      uid: uid,
      timestamp: serverTimestamp(),
      photoURL: photoURL,
      image: imageURL,
      audio: recordedAudio ? recordedAudio : null,
    };

    await addDoc(collection(db, "massages"), messageData);
    setInput("");
    setImageURL("");
    setRecordedAudio(null);
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

  const handleEmojiSelect = (emoji) => {
    const emojiText = emoji.native || emoji.emoji;
    setInput(input + emojiText);
  };

  const handleAudioRecorded = (data) => {
    setRecordedAudio(data.blob);
    console.log("Recorded audio:", data);
  };

  return (
    <div className="w-full">
      <form>
        <div className="flex items-center px-3 py-2 rounded-lg gap-2">
          <button
            onClick={openImageFile}
            type="button"
            className={style.textEmojiBtn}
          >
            <FaImage size={25}></FaImage>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleSendImage}
            />
            <span className="sr-only">Upload image</span>
          </button>
          <button
            className={style.textEmojiBtn}
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <FaIcons size={25}></FaIcons>
          </button>

          <ReactMediaRecorder
            audio
            render={({
              startRecording,
              stopRecording,
              mediaBlobUrl,
              status,
            }) => (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={startRecording}
                  className={style.textEmojiBtn}
                  type="button"
                >
                  Start
                </button>
                <button
                  onClick={stopRecording}
                  className={style.textEmojiBtn}

                  type="button"
                >
                  Stop
                </button>
                {status === "recording" && <audio src={mediaBlobUrl} controls />}
                {recordedAudio && <audio src={mediaBlobUrl} controls />}
                
              </div>
            )}
            onData={handleAudioRecorded}
          />

          {showEmojiPicker && (
            <div className="absolute z-10 bottom-14 right-0">
              <EmojiPicker onEmojiClick={handleEmojiSelect} />
            </div>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="chat"
            rows="1"
            className={style.inputCls}
            placeholder="Your message..."
          ></input>
          <button
            className="btn bg-sky-700 text-white"
            type="submit"
            onClick={sendMassage}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBoxTyping;
