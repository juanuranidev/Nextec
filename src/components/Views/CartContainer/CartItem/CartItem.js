import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import './_CartItem.scss';

const CartItem = () => {
    const { cartList, removeItem } = useCartContext()

    return (
        <>  
        {cartList.map(prod =>
            <tr key={prod.id} className='itemCart'>
                <td className='itemCart_td'><button className='itemCart_td_button' onClick={() => removeItem(prod.id)}><span className='fas fa-times' /></button></td>
                <td className='itemCart_td itemImage' ><img src={prod.image} className='itemImage_img' alt='Imágen de producto' /></td>
                <td className='itemCart_td itemName'>{prod.name}</td>
                <td className='itemCart_td'>${(prod.price).toLocaleString('es')}</td>
                <td className='itemCart_td'>{prod.quantity}</td>
                <td className='itemCart_td'>${(prod.quantity * prod.price).toLocaleString('es')}</td>
            </tr>)}
        </>    
    )
}

export default CartItem;