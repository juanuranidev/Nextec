import "../styles/layout/_ItemListContainer.scss"
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getFetch } from '../helpers/mock'
import Titulo from "./Titulo"


function ItemListContainer(props) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // Use effect para que se ejecute en 2do plano, después de que se cargó y ejecutó toda la función se ejecuta
    useEffect(() => {
        // Simulando el llamado a una api
        getFetch 
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [])



// Se ejecuta una sola vez por el filtro "[]"
console.log(productos)

    return (
        <main>
            <Titulo texto="Nuestros Productos"/> 
            {loading
                ? <h2>Cargando...</h2>
                : <ItemList productos={productos}/>}

        </main>
    )
}

export default ItemListContainer
