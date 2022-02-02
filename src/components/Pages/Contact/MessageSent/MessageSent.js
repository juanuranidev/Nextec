import React from 'react';
import { Link } from 'react-router-dom';
import './_MessageSent.scss'

const MessageSent = () => {
  return (
    <div className="messageSent">
        <h2 className="messageSent_h2">¡Mensaje enviado!</h2>
        <p className="messageSent_p">Pronto nos pondremos en contacto con usted</p>
        <button className="messageSent_button"><Link to="/" className="messageSent_button_a">Inicio</Link></button>
    </div>
  );
};

export default MessageSent;