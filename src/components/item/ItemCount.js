import React from 'react'
import {useState} from 'react'
import "./_ItemCount.scss"


function ItemCount({stock}) {
    const [counter, setCounter] = useState(1)   

    const handleDecrement = () => counter > 1 ? setCounter(prev => prev - 1) :  console.log("Elija una cantidad mínima")
    const handleIncrement = () => stock > counter ? setCounter(prev => prev + 1) :  console.log("No hay más stock disponible")
    const addToCart = () => console.log(`Producto Agregado al carrito, cantidad: ${counter}`)

    return (
        <div className="itemCount">
            <div>
                <i className="fas fa-minus minus" onClick={handleDecrement}></i>           
                <p className="counter">{counter}</p>
                <i className="fas fa-plus add" onClick={handleIncrement} />
            </div>
            <button onClick={addToCart}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount
