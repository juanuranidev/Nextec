import React, { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import ProductsContainer from '../../ProductsContainer/ProductsContainer';
import Filters from './Filters/Filters';
import Loader from '../../Loader/Loader';
import './Products.scss';

const Products = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const handleGetProducts = () => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'items'))
    // .where('capital', '==', true).get()
    getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
  }

  useEffect(() => {
    handleGetProducts()
  }, [])
  
  if(loading){
    return <Loader/>
  }

  return (
    <section className='products'>
      <Filters />
      <ProductsContainer products={products} />
    </section>
  );
};

export default Products;