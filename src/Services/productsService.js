import {
  limit,
  query,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";

const dataBase = getFirestore();

export const getAllProductsService = async () => {
  const queryCollection = query(collection(dataBase, "items"));
  const response = await getDocs(queryCollection);

  return response;
};

export const getAllProductsWithLimitService = async (productsLimit) => {
  const queryCollection = query(
    collection(dataBase, "items"),
    limit(productsLimit)
  );
  const response = await getDocs(queryCollection);

  return response;
};
