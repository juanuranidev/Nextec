import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './_CartWidget.scss'

function CarWidget({onClick}) {
    const { cartList } = useCartContext()
    return (
        <div className="carWidget">
            <Link to="/cart"><span className={cartList.length===0 ? "fas fa-shopping-cart fa-2x cartIcon carWidget_a_empty" : "fas fa-shopping-cart fa-2x carWidget_a"} onClick={onClick} /></Link>
            <span className="carWidget_span">{cartList.reduce((quantity,item) => quantity + item.quantity, 0)}</span>
        </div>
    )
}

export default CarWidget