import React from 'react'
import CartItem from './CartItem/CartItem'
import './_Cart.scss'

function Cart() {

    return (
        <section className='cartSection'>
            <table className='table'>
                <thead>
                    <tr>
                        <th><span className="fas fa-times" /></th>
                        <th className="itemImage">Imágen</th>
                        <th className="itemName">Nombre</th>
                        <th className="itemPrice">Precio</th>
                        <th className="itemQuantity">Cantidad</th>
                        <th className="itemTotal">Total</th>
                    </tr>
                </thead>
                <tbody>
                <CartItem /> 
                </tbody>
            </table>
        </section>
        
    )
}

export default Cart


