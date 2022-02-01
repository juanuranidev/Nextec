import React from 'react'
import { useState } from 'react'
import { useCartContext } from '../../../Context/CarContext'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import BackButton from '../../../BackButton/BackButton'
import MercadoPago from './mercadopago.png'
import ItemCount from '../ItemCount/ItemCount'
import "./_ItemDetail.scss"

const ItemDetail = ({product}) => {
    const [showAddToCart, setShowAddToCart] = useState(true)
    const { addToCart } = useCartContext()
    let linkToCategory = `/categoria/${product.category}`

    const addedToCart = () => toast.success("Agregado al carrito")

    const handleAddToCart = (counter) => {
        setShowAddToCart(false)
        addToCart( {...product, quantity: counter})
        addedToCart()
    }
    
    return (
        <>
            <BackButton />
            <div className="itemDetail">     
                <div className="itemImage">
                    <img src={product.image} className="itemImage_img"/>
                </div>
                <div className="itemDetails">
                    <div className="itemRoute">
                        <Link to="/" className="itemRoute_a">inicio</Link>
                        <span className="fas fa-angle-left itemRoute_span"></span>
                        <Link to={linkToCategory} className="itemRoute_a">{product.category}</Link>
                    </div>
                    <h2 className="itemDetails_h2">{product.name}</h2>
                    <p className="itemDetails_p">${product.price}</p>
                    <div className="itemPaymentMethods">
                        <p className="itemPaymentMethods_p">Pagá con Mercado Pago y elegí una de sus distintas formas de pago</p>
                        <img src={MercadoPago} alt="imágen de los métodos de pago" className="itemPaymentMethods_img"/>
                    </div>
                    <div className="cartButtons">
                        {showAddToCart
                        ? <ItemCount stock={product.stock} handleAddToCart={handleAddToCart} id={product.id} />
                        : <div className="cartGoToButtons">
                            <button className="cartGoToButtons_button"><Link to="/" className="cartGoToButtons_button_a">Volver al inicio</Link></button>
                            <button className="cartGoToButtons_button"><Link to="/cart" className="cartGoToButtons_button_a">Ir al carrito</Link></button>
                        </div>}
                    </div>
                    <div className="itemHelpers">
                        <div className="itemHelper">
                            <span className="fas fa-check itemHelper_span" />
                            <p className="itemHelper_p" >Si el producto está publicado significa que hay stock</p>
                        </div>
                        <div className="itemHelper">
                            <span className="fab fa-whatsapp itemHelper_span" />
                            <p className="itemHelper_p" >No olvides que puedes contactarnos por WhatsApp si tienes alguna duda</p>
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