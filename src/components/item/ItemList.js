import React from 'react'
import Item from './Item'
import './_ItemList.scss'


function ItemList(props) {
   console.log(props)
    return (
        <div className="items">
            {props.products.map(producto => <Item titulo={producto.titulo} id={producto.id} key={producto.id} stock={producto.stock} precio={producto.precio} imagen={producto.imagen}/>)}
        </div>
    )
}

export default ItemList
