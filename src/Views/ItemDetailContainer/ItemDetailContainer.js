import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail/ItemDetail';
import './_ItemDetailContainer.scss';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {idItem} = useParams()

  useEffect(() => {
    const dataBase = getFirestore()
    const queryProd = doc (dataBase, 'items', idItem)
    getDoc(queryProd)
      .then(resp => setProduct({id: resp.id, ...resp.data()}))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [idItem])
  
    return (
        <section className='itemDetailContainer'>
          <ItemDetail product={product} />
        </section>
    )
} 

export default ItemDetailContainer;