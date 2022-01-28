import React from 'react'
import { getDoc, getFirestore, doc } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import PageLoader from '../pageLoader/PageLoader'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {idItem} = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryProd = doc (db, 'items', idItem)
    getDoc(queryProd)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
    .catch(err => err)
    .finally(setLoading(false))
  }, [])
    return (
        <div>
          {loading
                ? <PageLoader />
                : <ItemDetail product={product} />}
        </div>
    )
} 

export default ItemDetailContainer