import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CarContext'
import Button from '../../buttons/Button'
import './_CartPayment.scss'

const CartPayment = () => {
    const { cartList } = useCartContext()
    
    let cartTotal = 0
    let productTotal = 0
    cartList.forEach(product => {
        productTotal = product.quantity * product.price
        cartTotal += productTotal
    })

    return (
        <div className="cartInfo">
                <div className="cartInfoTitle">
                    <h3>Cantidad a pagar</h3>
                </div>
                <div className="CartInfoPrice">
                    <p className="cartTotal">Total:<br />${cartTotal.toLocaleString('es')}</p>
                    <div className="cartButtons">
                        <Button text="Finalizar la compra" />   
                        <Link to="/" className="moreProducts">Ver más productos</Link>
                    </div>
                </div>
            </div>
    )
}

export default CartPayment
