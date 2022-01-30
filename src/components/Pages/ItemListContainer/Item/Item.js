import React from 'react'
import { Link } from 'react-router-dom'
import './_Item.scss'

function Item(props) {
    return (      
        <div key={props.id} className="item">     
            <img src={props.image} alt="Imágen de producto" className="item_img"/>
            <div className="itemContent">
                <h3 className="itemContent_h3">{props.name}</h3>
                <div className="itemBottomContent">
                    <p className="itemBottomContent_p">${props.price}</p>
                    <Link to={`/item/${props.id}`} className="itemBottomContent_a"><button className="itemBottomContent_a_button">Ver Producto</button></Link>
                </div>
            </div>
        </div>   
    )
}

export default Item