import { getFirestore, doc, getDoc } from "firebase/firestore";

const dataBase = getFirestore();

export const getItem = async (idItem) => {
  try {
    const queryProd = doc(dataBase, "items", idItem);
    const response = await getDoc(queryProd);

    return response;
  } catch (error) {
    console.log(error);
  }
};
