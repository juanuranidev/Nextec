import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from "../products"
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import BackButton from '../buttons/BackButton/BackButton'
import Titulo from '../titulo/Titulo'
import ItemList from './ItemList/ItemList'
import PageLoader from '../pageLoader/PageLoader'
import "./_ItemListContainer.scss"

function ItemListContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    console.log(idCategoria)

    useEffect(() => {
        if (idCategoria) {
                getFetch 
                .then(response => setData(response.filter(prod => prod.categoria === idCategoria)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
                getFetch 
                .then(response => setData(response))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCategoria])

    return (
        <main>
            <Header />
            {idCategoria ? <BackButton /> : null}
            <Titulo texto="Nuestros Productos"/>
            {loading    ? <PageLoader />   : <ItemList products={data}/>}
        </main>
    )
}

export default ItemListContainer
