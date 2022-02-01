import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import PageLoader from '../../PageLoader/PageLoader'
import ItemDetail from './ItemDetail/ItemDetail'
import './_ItemDetailContainer.scss'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {idItem} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryProd = doc (db, 'items', idItem)
    getDoc(queryProd)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
    .catch(err => console.log(err))
    .finally(setLoading(false))
  }, [])
  
    return (
        <section className="itemDetailContainer">
          {loading
          ? <PageLoader />
          : <ItemDetail product={product} />}
        </section>
    )
} 

export default ItemDetailContainer