import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <div className="itemDetail">
            <div className="itemImage">
                {/* <img /> */}
            </div>
            <div className="itemDetails">
                <h2>{producto.name}</h2>
                <p>{producto.price}</p>
                    <div className="itemButtons">
                        <div className="itemAmount">
                        <i className="fas fa-minus minus" />
                        <p className="counter"></p>    
                        <i className="fas fa-plus add" />
                    </div>
                    <div className="itemAddToCart">
                        <button className="addToCartButton">Agregar al carrito</button>
                    </div>
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
