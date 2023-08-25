import { useEffect,  useState } from "react";
import ChatBoxText from "../ChatBoxText/ChatBoxText";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  
} from "firebase/firestore";
import { db } from "../../../firebase.config";


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
        <main className=" rounded shadow-2xl p-5 ">
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
