import React from 'react'
import ItemCount from './ItemCount'
import '../styles/components/_Item.scss'

function Item(props) {
    return (
        <div  key={props.id} className="item">
            <img src={props.imagen} />
            <h3 className="titulo">{props.titulo}</h3>
            <p className="precio">Precio: ${props.precio}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default Item
