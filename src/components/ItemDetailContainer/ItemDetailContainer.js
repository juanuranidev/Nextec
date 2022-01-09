import React from 'react'
import {useEffect, useState} from 'react'
import { getFetch } from '../products'
import PageLoader from '../pageLoader/PageLoader'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFetch
    .then(resp => setProducto(resp.find(prod => prod.id === '1')))
    .finally(() => setLoading(false))
  }, [])

  console.log(producto)


    return (
        <div>
          {loading
                ? <PageLoader />
                : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer

