import React, { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import ProductsContainer from '../../ProductsContainer/ProductsContainer';
import Filters from './Filters/Filters';
import Loader from '../../Loader/Loader';
import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const dataBase = getFirestore()
    const queryCollection = query(collection(dataBase, 'items'))

    getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
  }, [])
  
  if(loading){
    return <Loader/>
  }
  console.log(products.filter(x => x.price > 300000))

  return (
    <section className='products'>
      <Filters />
      <ProductsContainer products={products} />
    </section>
  );
};

export default Products;