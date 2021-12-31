import React from 'react'
import ItemCount from './ItemCount'

function Item(props) {
    return (
        <div  key={props.id}>
            <h1>{props.titulo}</h1>
            <p>id: {props.id}</p>
            <ItemCount stock={props.stock}/>
        </div>
    )
}

export default Item
