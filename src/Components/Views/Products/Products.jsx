import React, { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import './Products.scss';

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

  console.log(data)
  
  return (
    <section className='products'>
      <aside className='aside'>
        <div>
          <h3>Marcas</h3>
          <p>Marca número: 1</p>
          <p>Marca número: 2</p>
          <p>Marca número: 3</p>
          <p>Marca número: 4</p>
        </div>
      </aside>
      <div className='products'>

      </div>
    </section>
  );
};

export default Products;