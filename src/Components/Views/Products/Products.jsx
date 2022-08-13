import React, { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import './Products.scss';
import Filters from './Filters/Filters';
import Product from '../../Product/Product';

const Products = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const dataBase = getFirestore()
      const queryCollection = query(collection(dataBase, 'items'))
      getDocs(queryCollection)
          .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
  }, [])
  
  return (
    <section className='products' style={{display: "flex"}}>
      <Filters/>
      <div className='products' style={{display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "center"}}>
        {data.map(product  => <Product {...product} />)}
      </div>
    </section>
  );
};

export default Products;