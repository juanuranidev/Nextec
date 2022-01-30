import React from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CarContext';
import PaymentsDetails from './PaymentsDetails/PaymentsDetails';

const PaymentContainer = () => {
    const { paymentFinished, setPaymentFinished } = useCartContext()

    if(paymentFinished === true){
        return(
            <section>
                <h2>Pago realizado</h2>
                <Link to="/"><button onClick={() => setPaymentFinished(false)}>Volver al inicio</button></Link>
            </section>
        )
    }

  return (
    <PaymentsDetails />
    );
};

export default PaymentContainer;
