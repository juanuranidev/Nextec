import React from 'react'
import { Link } from 'react-router-dom'
import './_Item.scss'

function Item(props) {
    return (      
        <div key={props.id} className="item">     
            <img src={props.image} alt="Imágen de producto" className="itemImage"/>
            <div className="itemContent">
                <h3 className="itemTitle">{props.name}</h3>
                <div>
                    <p className="itemPrice">${(props.price).toLocaleString('es')}</p>
                    <Link to={`/item/${props.id}`}><button className="itemButton">Ver Producto</button></Link>
                </div>
            </div>
        </div>   
    )
}

export default Item
