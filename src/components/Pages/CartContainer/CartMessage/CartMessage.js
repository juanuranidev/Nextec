import React from 'react';
import { Link } from 'react-router-dom';
import './_CartMessage.scss'

const CartMessage = () => {
  return (
    <div className="cartMessage">
        <h2 className="cartMessage_h2">¡No tenés productos en el carrito!</h2>
        <p className="cartMessage_p">Agrega productos</p>
        <Link to="/" className="cartMessage_a"><button className="cartMessage_a_button">Comprar</button></Link>
    </div>
  );
};

export default CartMessage;