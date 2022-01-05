import React from 'react'
import {useState} from 'react'
import "../styles/components/_ItemCount.scss"


function ItemCount({stock}) {
    const [count, setCount] = useState(1)   

    const substract = () => count > 1 ? setCount(count - 1) :  null
    const add = () => stock > count ? setCount(count + 1) :  console.log("No hay más stock disponible")
    
    const agregarACarrito = () => console.log(`Producto Agregado al carrito, cantidad: ${count}`)

    return (
        <div className="itemCount">
            <div>
                <i className="fas fa-minus minus" onClick={substract}></i>
                <p className="count">{count}</p>
                <i className="fas fa-plus add" onClick={add} />
            </div>
            <button onClick={agregarACarrito}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount
