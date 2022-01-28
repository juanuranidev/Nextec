import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CarContext'
import BackButton from '../../buttons/BackButton/BackButton'
import MercadoPago from '../../../images/mercadopago.png'
import ItemCount from '../ItemCount/ItemCount'
import "./_ItemDetail.scss"

const ItemDetail = ({product}) => {
    const [show, setShow] = useState(true)
    const { addToCart } = useCartContext()
    let linkToCategory = `/categoria/${product.category}`

    const onAdd = (counter) => {
        setShow(false)
        addToCart( {...product, quantity: counter})
    }

    return (
        <>
            <BackButton />
            <div className="itemDetail">     
                <div className="itemImage">
                    <img src={product.image}/>
                </div>
                <div className="itemDetails">
                    <div className="itemRoute">
                        <Link to="/">inicio</Link>
                        <span className="fas fa-angle-left"></span>
                        <Link to={linkToCategory}>{product.category}</Link>
                    </div>
                    <h2 className="itemTitle">{product.name}</h2>
                    <p className="itemPrice">${product.price}</p>
                    <div className="itemPaymentMethods">
                        <p>Pagá con Mercado Pago y elegí una de sus distintas formas de pago</p>
                        <img src={MercadoPago} alt="imágen de los métodos de pago"/>
                    </div>
                    <div className="cartButtons">
                        {show
                        ? <ItemCount stock={product.stock} onAdd={onAdd} />
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
            {product.description &&
            <div className="itemDescription">
                <h2 className="itemDescription_h2">Descripción</h2>
                <p>{product.description}</p>
            </div>}
        </>
    )
}

export default ItemDetail