import React from 'react'
import Item from '../Item/Item'
import './_ItemList.scss'


function ItemList(props) {
    return (
        <div className="items" id="catalogo">
            {props.products.map(producto => <Item name={producto.name} id={producto.id} key={producto.id} stock={producto.stock} price={producto.price} image={producto.image}/>)}
        </div>
    )
}

export default ItemList
