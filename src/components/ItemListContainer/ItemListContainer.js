import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from "../products"
import Header from '../header/Header'
import Titulo from '../titulo/Titulo'
import ItemList from './ItemList/ItemList'
import PageLoader from '../pageLoader/PageLoader'
import "./_ItemListContainer.scss"

function ItemListContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        getFetch 
        .then(response => setData(response))
        .catch(error => console.log(error))
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
