import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query } from 'firebase/firestore'
import Header from '../header/Header'
import Titulo from '../titulo/Titulo'
import ItemList from './ItemList/ItemList'
import PageLoader from '../pageLoader/PageLoader'
import "./_ItemListContainer.scss"

function ItemListContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, 'items'))
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => err)
        .finally(() => setLoading(false))
        
    }, [])

    return (
        <main>
            <Header />
            <Titulo texto="Catálogo"/>
            {loading    ? <PageLoader />    : <ItemList products={data}/>}
        </main>
    )
}

export default ItemListContainer