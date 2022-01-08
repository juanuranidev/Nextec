import React from 'react'
import { Link } from 'react-router-dom'
import './_Item.scss'

function Item(props) {
    return (      
        <div key={props.id} className="item">      
            <img src={props.image} alt="Imágen de producto" className="itemImage"/>
            <h3 className="itemTitle">{props.name}</h3>
            <p className="itemPrice">Precio: ${props.price}</p>
            <Link to={`/item/${props.id}`}><button className="itemButton">Ver Producto</button></Link>     
        </div>   
    )
}

export default Item
