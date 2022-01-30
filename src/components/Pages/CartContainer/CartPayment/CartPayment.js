import React from 'react'
import { useCartContext } from '../../../Context/CarContext'
import { Link } from 'react-router-dom'
import './_CartPayment.scss'

const CartPayment = () => {
    const { cartList, setCartTotal } = useCartContext()
    
    let cartTotal = 0
    let productTotal = 0
    cartList.forEach(product => {
        productTotal = product.quantity * product.price
        cartTotal += productTotal
    })

    return (
        <div className="cartInfo">
            <div className="cartTitle">
                <h3 className="cartTitle_h3">Cantidad a pagar</h3>
            </div>
            <div className="CartPrice">
                <p className="CartPrice_p">Total:<br />${cartTotal.toLocaleString('es')}</p>
                <div className="cartButtons">
                    <button className="cartButtons_button" onClick={() => setCartTotal(cartTotal)} ><Link to="/payment"  className="cartButtons_button_a">Finalizar la compra</Link></button>
                    <Link to="/" className="cartButtons_a">Ver más productos</Link>
                </div>
            </div>
        </div>
    )
}

export default CartPayment