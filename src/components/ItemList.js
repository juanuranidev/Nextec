import React from 'react'
import Item from './Item'
import '../styles/components/_ItemList.scss'


function ItemList(props) {
   console.log(props)
    return (
        <div className="items">
            {props.productos.map(producto => <Item titulo={producto.titulo} id={producto.id} key={producto.id} stock={producto.stock} precio={producto.precio} imagen={producto.imagen}/>)}
        </div>
    )
}

export default ItemList
