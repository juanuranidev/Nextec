import React from 'react';
import { useCartContext } from '../../Context/CarContext';
import PaymentFinished from './PaymentFinished/PaymentFinished';
import PaymentsDetails from './PaymentsDetails/PaymentsDetails';
import './_PaymentContainer.scss'

const PaymentContainer = () => {
    const { paymentFinished } = useCartContext()

    if(paymentFinished === true){
        return(
            <section className="paymentContainer">
                <PaymentFinished />    
            </section>
        )
    }

    return (
        <section className="paymentContainer">
            <PaymentsDetails />
        </section>
    );
};

export default PaymentContainer;