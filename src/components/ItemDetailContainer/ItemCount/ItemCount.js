import React from 'react'
import { useState } from 'react'
import "./_ItemCount.scss"

function ItemCount({stock, addToCart}) {
    const [counter, setCounter] = useState(1)   

    const handleDecrement = () => counter > 1 ? setCounter(prev => prev - 1) :  console.log("Elija una cantidad mínima")   
    const handleIncrement = () => stock > counter ? setCounter(prev => prev + 1) :  console.log("No hay más stock disponible")

    return (
        <div className="itemCount">
            <div>
                <i className="fas fa-minus minus" onClick={handleDecrement} />         
                <p className="counter">{counter}</p>
                <i className="fas fa-plus add" onClick={handleIncrement} />
            </div>
            <button onClick={() => addToCart(counter)}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount
