import React from 'react'
import CartItem from './CartItem/CartItem'
import CartPayment from './CartPayment/CartPayment'
import EmptyCartButton from './EmptyCartButton/EmptyCartButton'
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
            <div className="emptyCart">
                <EmptyCartButton />
            </div>   
            <CartPayment />
        </section>
        
    )
}

export default Cart


