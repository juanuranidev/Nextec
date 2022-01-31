import React from 'react'
import { useCartContext } from '../../../Context/CarContext'
import { Link } from 'react-router-dom'
import './_PaymentFinished.scss'

const PaymentFinished = () => {
    const {setPaymentFinished, inputs} = useCartContext()
  return (
    <div className="paymentFinished">
        <h2 className="paymentFinished_h2">¡Pago realizado!</h2>
        <p className="paymentFinished_p">Muchas gracias {inputs.lastName} {inputs.name} por su compra.</p>
        <p className="paymentFinished_p">Revise su casilla de correo: {inputs.mail} para más información.</p>
        <p className="paymentFinished_p">Número de órden: {inputs.orderId}</p>
        <button className="paymentFinished_button" onClick={() => setPaymentFinished(false)}><Link to="/" className="paymentFinished_button_a">Volver al inicio</Link></button>
    </div>
  );
};

export default PaymentFinished;
