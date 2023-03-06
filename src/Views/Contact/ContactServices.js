import { addDoc, collection, getFirestore } from "firebase/firestore";

const dataBase = getFirestore();

export const registerMessageService = async (message) => {
  try {
    const messagesCollection = collection(dataBase, "messages");
    const response = await addDoc(messagesCollection, message);
    return response;
  } catch (error) {
    console.log(error);
  }
};
