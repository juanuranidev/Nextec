import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import './_EmptyCartButton.scss';

const EmptyCartButton = () => {
    const { emptyCart } = useCartContext()
    
    return (
            <button onClick={emptyCart} className='emptyCartButton'>Vaciar Carrito</button>   
    )
}

export default EmptyCartButton;