import React from 'react'
import Item from '../Item/Item'
import './_ItemList.scss'

function ItemList(props) {
    return (
        <div className="items">
            {props.products.map(product => <Item name={product.name} id={product.id} key={product.id} stock={product.stock} price={product.price} image={product.image}/>)}
        </div>
    )
}

export default ItemList