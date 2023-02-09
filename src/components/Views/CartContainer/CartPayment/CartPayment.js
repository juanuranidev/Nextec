import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import { Link } from 'react-router-dom';
import './_CartPayment.scss';

const CartPayment = () => {
    const { cartList, setCartTotal } = useCartContext()
    
    const calculateCartTotal = () => {
        let cartTotal = 0
        let productTotal = 0
        cartList.forEach(product => {
            productTotal = product.quantity * product.price
            cartTotal += productTotal
        })
        return cartTotal
    }
    
    return (
        <div className='cartInfo'>
            <div className='cartTitle'>
                <h3 className='cartTitle_h3'>Cantidad a pagar</h3>
            </div>
            <div className='CartPrice'>
                <p className='CartPrice_p'>Total:<br />${calculateCartTotal().toLocaleString('es')}</p>
                <div className='cartButtons'>
                    <button className='cartButtons_button' onClick={() => setCartTotal(calculateCartTotal())}><Link to='/payment' className='cartButtons_button_a'>Finalizar la compra</Link></button>
                    <Link to='/' className='cartButtons_a'>Ver más productos</Link>
                </div>
            </div>
        </div>
    )
}

export default CartPayment;