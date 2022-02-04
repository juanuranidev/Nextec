import React from 'react';
import { Link } from 'react-router-dom';
import './_Message.scss';

const Message = (props) => {
  return (
    <div className='message'>
        <h2 className='message_h2'>{props.h2}</h2>
        <p className='message_p'>{props.p}</p>
        <button className='message_button'><Link to='/' className='message_button_a'>Inicio</Link></button>
    </div>
  );
};

export default Message