import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase.config";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import { ReactMediaRecorder } from "react-media-recorder";
import { IconButton } from "@mui/material";
import { Image, Record, Smiley, Stop } from "phosphor-react";
import { ThumbUp } from "@mui/icons-material";

const style = {
  inputCls: `block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
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

    try {
      await addDoc(collection(db, "messages"), messageData);
      setInput("");
      setImageURL("");
      setRecordedAudio(null);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const openImageFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
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
    console.log("Audio recorded:", data);
    if (data.blob) {
      setRecordedAudio(data.blob);
      console.log("Recorded audio blob:", data.blob);
    } else {
      console.error("No audio blob found.");
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={sendMassage}>
        <div className="flex items-center px-3 py-2 rounded-lg gap-2">
          <button
            onClick={openImageFile}
            type="button"
            className="border rounded-md bg-white"
          >
            <IconButton>
              <Image className="text-black"></Image>
            </IconButton>
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
            className="border rounded-md bg-white "
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <IconButton>
              <Smiley className="text-green-900"></Smiley>
            </IconButton>
          </button>

          <ReactMediaRecorder
            audio
            render={({ startRecording, stopRecording, status, error }) => (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={startRecording}
                  className="bg-white rounded-md"
                  type="button"
                >
                  <IconButton>
                    <Record className="text-red-500"></Record>
                  </IconButton>
                </button>
                <button
                  onClick={stopRecording}
                  className="border rounded-md bg-white"
                  type="button"
                >
                  <IconButton>
                    <Stop className="text-red-400"></Stop>
                  </IconButton>
                </button>
                {status === "recording" && <p>Recording...</p>}
                {error && <p>Error: {error}</p>}
                {recordedAudio && (
                  <audio src={URL.createObjectURL(recordedAudio)} controls />
                )}
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
          />
          <button type="button" 
          className="border rounded-md bg-white"
          > 
          <IconButton >
            <ThumbUp className="text-green-500"></ThumbUp>
          </IconButton>
          </button>
          <button className="btn bg-sky-700 text-white" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBoxTyping;
