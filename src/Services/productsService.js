import { getFirestore, query, collection, getDocs } from "firebase/firestore";

const dataBase = getFirestore();

export const getAllProductsService = async () => {
    const queryCollection = query(collection(dataBase, "items"));
    const response = await getDocs(queryCollection)
    
    return response
}