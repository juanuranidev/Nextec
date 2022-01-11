import React from 'react'
import {useEffect, useState} from 'react'
import { getFetch } from '../products'
import { useParams } from 'react-router-dom'
import PageLoader from '../pageLoader/PageLoader'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const {idItem} = useParams()

  useEffect(() => {
      getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === idItem)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  }, [])

    return (
        <div>
          {loading
                ? <PageLoader />
                : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer

