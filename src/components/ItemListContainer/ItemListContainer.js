import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from './ItemList/ItemList'
import Titulo from '../Titulo'
import {getFetch} from "../products"
import "./_ItemListContainer.scss"


function ItemListContainer() {
    // useState
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
// Se ejecuta una sola vez por el filtro "[]"



    return (
        <main>
            <Titulo texto="Nuestros Productos"/> 
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList products={data}/>}

        </main>
    )
}

export default ItemListContainer
