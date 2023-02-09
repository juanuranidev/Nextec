import React from 'react';
import { useCartContext } from '../../../../Context/CartContext';
import { Link } from 'react-router-dom';
import './_PaymentFinished.scss';

const PaymentFinished = () => {
  const {setPaymentFinished, inputs} = useCartContext()

  return (
    <div className="paymentFinished">
        <h2 className="paymentFinished_h2">¡Pago realizado!</h2>
        <p className="paymentFinished_p">Muchas gracias {inputs.lastName} {inputs.name} por su compra.</p>
        <p className="paymentFinished_p">El número de seguimiento de su compra es: {inputs.orderId}</p>
        <p className="paymentFinished_p">Revise su casilla de correo: {inputs.mail}</p>
        <p className="paymentFinished_p">Allí encontrará toda la información de su compra.</p>
        <button className="paymentFinished_button" onClick={() => setPaymentFinished(false)}><Link to="/" className="paymentFinished_button_a">Finalizar Compra</Link></button>
    </div>
  );
};

export default PaymentFinished;