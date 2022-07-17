import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import { ProductModel } from '../Context/CartContext';

const useGetProducts = (parameter1, parameter2, parameter3 ) => {
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    try{
      const dataBase = getFirestore()
      const queryCollection = query(collection(dataBase, 'products'), where(parameter1, parameter2, parameter3))
      
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    } catch(error){
      console.log(error)
      setLoader(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return ({products, loader});
}

export default useGetProducts;