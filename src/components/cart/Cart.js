import React from 'react'
import { useCartContext } from '../context/CarContext'

function Cart() {
    const { cartList, emptyCart } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <li key={prod.id} >{prod.name}</li>)}
            <button onClick={emptyCart} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
