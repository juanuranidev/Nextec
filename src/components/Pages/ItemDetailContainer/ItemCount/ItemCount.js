import React from 'react'
import { useState } from 'react'
import "./_ItemCount.scss"

function ItemCount({stock, onAdd}) {
    const [amount, setAmount] = useState(1)   

    const handleDecrement = () => amount > 1 ? setAmount(prev => prev - 1) :  console.log("Elija una cantidad mínima")   
    const handleIncrement = () => stock > amount ? setAmount(prev => prev + 1) :  console.log("No hay más stock disponible")

    return (
        <div className="itemCount">
            <div>
                <i className="fas fa-minus minus" onClick={handleDecrement} />         
                <p className="counter">{amount}</p>
                <i className="fas fa-plus add" onClick={handleIncrement} />
            </div>
            <button onClick={() => onAdd(amount)}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount
