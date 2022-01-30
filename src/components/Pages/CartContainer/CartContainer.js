import React from 'react'
import { useCartContext } from '../../Context/CarContext'
import CartItem from './CartItem/CartItem'
import CartMessage from './CartMessage/CartMessage'
import CartPayment from './CartPayment/CartPayment'
import EmptyCartButton from './EmptyCartButton/EmptyCartButton'
import './_CartContainer.scss'

function CartContainer() {
    const { cartList } = useCartContext()
    
    if(cartList.length===0){
        return(
            <CartMessage />
        )
    }

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

export default CartContainer


