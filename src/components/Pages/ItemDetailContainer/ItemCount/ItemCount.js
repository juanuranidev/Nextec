import React from 'react'
import { useState } from 'react'
import "./_ItemCount.scss"

function ItemCount({stock, handleAddToCart}) {
    const [amount, setAmount] = useState(1)   

    const handleDecrement = () => amount > 1 ? setAmount(prev => prev - 1) :  console.log("Elija una cantidad mínima")   
    const handleIncrement = () => stock > amount ? setAmount(prev => prev + 1) :  console.log("No hay más stock disponible")

    return (
        <div className="itemCount">
            <div className="item_counter">
                <span className="fas fa-minus item_counter_span" onClick={handleDecrement} />         
                <p className="item_counter_p">{amount}</p>
                <span className="fas fa-plus item_counter_span" onClick={handleIncrement} />
            </div>
            <button className="itemCount_button" onClick={() => handleAddToCart(amount)}>Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount