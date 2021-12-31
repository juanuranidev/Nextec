import React from 'react'
import {useState, useEffect} from 'react'
import "../styles/components/_ItemCount.scss"


function ItemCount({stock}) {
    const [count, setCount] = useState(1)   

    const substract = () => count > 1 ? setCount(count - 1) :  null
    const add = () => stock > count ? setCount(count + 1) :  null
    
    const agregarACarrito = () => console.log(`Producto Agregado al carrito, cantidad: ${count}`)

    return (
        <div className="itemCount">
            <div>
                <button onClick={substract}>Restar</button>
                <p>Cantidad: {count}</p>
                <button onClick={add}>Sumar</button>
            </div>
            <button onClick={agregarACarrito}>Agregar a carrito</button> 
        </div>
    )
}

export default ItemCount
