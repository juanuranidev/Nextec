import React from 'react'
import { useCartContext } from '../../context/CarContext'
import './_CartItem.scss'

const CartItem = () => {
    const { cartList, removeItem } = useCartContext()
    return (
        <>  
            {cartList.map(prod =>
                <tr key={prod.id}>
                    <td className="itemDelete"><button className="removeItemButton" onClick={() => removeItem(prod.id)}><span className="fas fa-times" /></button></td>
                    <td className="itemImage">image</td>
                    <td className="itemName">{prod.name}</td>
                    <td className="itemPrice">${prod.price}</td>
                    <td className="itemQuantity">{prod.quantity}</td>
                    <td className="itemTotal">${(prod.quantity * prod.price).toLocaleString('es')}</td>
                </tr>          
            )}
        </>    
    )
}

export default CartItem