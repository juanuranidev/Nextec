import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './_Item.scss'

function Item(props) {
    return (
        <div  key={props.id} className="item">
            <img src={props.imagen} />
            <h3 className="titulo">{props.name}</h3>
            <p className="precio">Precio: ${props.price}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default Item
