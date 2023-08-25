import React, { useEffect, useRef, useState } from "react";
import ChatBoxText from "../ChatBoxText/ChatBoxText";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import ChatBoxTyping from "../ChatBoxTyping/ChatBoxTyping";
import ChatboxTop from "../ChatProfile/ChatboxTop/ChatboxTop";
import ChatBox from "../ChatBox/ChatBox";

const Chat = () => {
  const [massages, setMassages] = useState([]);
//   console.log("Chat component", massages);

  useEffect(() => {
    const q = query(collection(db, "massages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let massages = [];
      QuerySnapshot.forEach((doc) => {
        massages.push({ ...doc.data(), id: doc.id });
      });
      setMassages(massages);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div>
        <main className="container mx-auto rounded shadow-2xl p-5 ">
          {massages &&
            massages.map((massage) => (
              <ChatBoxText key={massage?.id} massage={massage}></ChatBoxText>
            ))}
        </main>
      </div>
    </>
  );
};

export default Chat;
