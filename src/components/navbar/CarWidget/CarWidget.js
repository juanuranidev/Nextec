import React from 'react'
import { Link } from 'react-router-dom'
import {useCartContext} from '../../context/CarContext'
import './_CartWidget.scss'

function CarWidget({onClick}) {
    const { cartList } = useCartContext()

    return (
        <div className="carWidget">
            <Link to="/cart"><span className={cartList.length===0 ? "fas fa-shopping-cart fa-2x cartIcon empty" : "fas fa-shopping-cart fa-2x cartIcon"} onClick={onClick} ></span></Link>
            <span className="cartQuantity">{cartList.reduce((quantity,item) => quantity + item.quantity, 0)}</span>
        </div>
    )
}

export default CarWidget