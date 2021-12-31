import React, { useState, useEffect } from 'react'
import { getFetch } from '../helpers/mock'
import "../styles/layout/_ItemListContainer.scss"
import ItemCount from './ItemCount'
import Item from './Item'



// const bringProducts = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(productos)
//     }, 3000);
// })







function ItemListContainer({titulo}) {
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
        <section>
            <h2>{titulo}</h2>
            {/* Usando la función map para mostrar los productos en la pantalla */}
            { loading
            ? <h2>Cargando...</h2>
            : productos.map(producto => <Item titulo={producto.titulo} id={producto.id} key={producto.id} stock={producto.stock}/>)}
        </section>
    )
}

export default ItemListContainer
