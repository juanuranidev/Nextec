import React from 'react';
import { useCartContext } from '../../Context/CarContext';
import PaymentFinished from './PaymentFinished/PaymentFinished';
import PaymentsDetails from './PaymentsDetails/PaymentsDetails';


const PaymentContainer = () => {
    const { paymentFinished } = useCartContext()

    if(paymentFinished === true){
        return(
            <PaymentFinished />    
        )
    }

  return (
    <PaymentsDetails />
    );
};

export default PaymentContainer;
