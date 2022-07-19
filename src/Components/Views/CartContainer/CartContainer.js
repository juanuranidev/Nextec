import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import Title from '../../Title/Title';
import Message from '../../Message/Message';
import CartItem from './CartItem/CartItem';
import EmptyCartButton from './EmptyCartButton/EmptyCartButton';
import CartPayment from './CartPayment/CartPayment';
import './_CartContainer.scss';

function CartContainer() {
    const { cartList } = useCartContext()
    
    if(cartList.length===0){
        return(
            <>
                <section className='cartSection'>
                    <Message h2={'Carrito vacío'} p={'¡Agrega nuevos productos!'} />
                </section>
            </>
        )
    }

    return (
        <>
            <section className='cartSection'>
            <Title text={"Tu carrito de compras"} />
                <table className='cartSection_table'>
                    <thead>
                        <tr>
                            <th><span className='fas fa-times' /></th>
                            <th>Imágen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CartItem /> 
                    </tbody>
                </table>
                <div className='emptyCart'>
                    <EmptyCartButton />
                </div>   
                <CartPayment />
            </section>     
        </>
    )
}

export default CartContainer;