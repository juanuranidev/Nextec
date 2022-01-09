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

    // Use effect para que se ejecute en 2do plano, después de que se cargó y ejecutó toda la función se ejecuta
    useEffect(() => {
        // Simulando el llamado a una api
        getFetch 
        .then(response => setData(response))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return (
        <main>
            <Header />
            <Titulo texto="Nuestros Productos"/> 
            {loading
                ? <PageLoader />
                : <ItemList products={data}/>}
        </main>
    )
}

export default ItemListContainer
