import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./_ItemDetail.scss"

const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
        <div className="itemDetail">
            <div className="itemImage">
            <img src={producto.image}/>
            </div>
            <div className="itemDetails">
                <h2 className="itemTitle">{producto.name}</h2>
                <p className="itemPrice">${producto.price}</p>
                <div className="itemPaymentMethods">
                    <p>Tenemos distintos métodos de pago</p>
                    <img src="img/mercadopago.png"/>
                </div>
                <div className="itemButtons">
                    <ItemCount stock={producto.stock}/>
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
    )
}

export default ItemDetail
