import React from 'react'
import { useCartContext } from '../../../Context/CarContext'
import { Link } from 'react-router-dom'
import './_PaymentFinished.scss'

const PaymentFinished = () => {
    const {setPaymentFinished} = useCartContext()

  return (
    <div className="paymentFinished">
        <h2 className="paymentFinished_h2">¡Pago realizado!</h2>
        <button className="paymentFinished_button" onClick={() => setPaymentFinished(false)}><Link to="/" className="paymentFinished_button_a">Volver al inicio</Link></button>
    </div>
  );
};

export default PaymentFinished;
