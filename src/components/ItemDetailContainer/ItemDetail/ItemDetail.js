import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CarContext'
import BackButton from '../../buttons/BackButton/BackButton'
import MercadoPago from '../../../images/mercadopago.png'
import ItemCount from '../ItemCount/ItemCount'
import "./_ItemDetail.scss"

const ItemDetail = ({producto}) => {
    const [show, setShow] = useState(true)
    const {cartList, addToCart} = useCartContext()
    let linkToCategory = `/categoria/${producto.categoria}`

    const onAdd = (counter) => {
        setShow(false)
        addToCart( {...producto, quantity: counter})
    }

    return (
        <>
            <BackButton />
            <div className="itemDetail">     
                <div className="itemImage">
                    <img src={producto.image}/>
                </div>
                <div className="itemDetails">
                    <div className="itemRoute">
                        <Link to="/">inicio</Link>
                        <span className="fas fa-angle-left"></span>
                        <Link to={linkToCategory}>{producto.categoria}</Link>
                        <span className="fas fa-angle-left"></span>
                        <p>{producto.name}</p>
                    </div>
                    <h2 className="itemTitle">{producto.name}</h2>
                    <p className="itemPrice">${(producto.price).toLocaleString('es')}</p>
                    <div className="itemPaymentMethods">
                        <p>Pagá con Mercado Pago y elegí una de sus distintas formas de pago</p>
                        <img src={MercadoPago} alt="imágen de los métodos de pago"/>
                    </div>
                    <div className="cartButtons">
                        {show
                        ? <ItemCount stock={producto.stock} onAdd={onAdd} />
                        : <div>
                            <Link to="/"><button className="goToHome">Volver al inicio</button></Link>
                            <Link to="/cart"><button className="goToCart" >Ir al carrito</button></Link>
                        </div>}
                    </div>
                    <div className="itemHelpers">
                        <div className="itemHelper">
                            <span className="fas fa-check" />
                            <p>Si el producto está publicado significa que hay stock</p>
                        </div>
                        <div className="itemHelper">
                            <span className="fab fa-whatsapp" />
                            <p>No olvides que puedes contactarnos por WhatsApp si tienes alguna duda</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail
