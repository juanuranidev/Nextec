import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import './_FooterSubscribe.scss';

const FooterSubscribe = () => {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [userEmail, setUserEmail] = useState({email: ''})

  const successfulSubscription = () => toast.success('Suscripción realizada con éxito');
  const errorSubscription = () => toast.success('Ingresa un email válido');

  const handleChange = (e) => {
    setUserEmail({
      ...userEmail,
      [e.target.name] : e.target.value
    })
}

  const subscribe = async () => {
        let email = {}
          email.email = userEmail.email

        const dataBase = getFirestore()
        const emailCollection = collection(dataBase, 'Newsletter') 
        await addDoc(emailCollection, email)
        .catch(err => console.log(err))
        .finally (() => {
          setIsSubscribed(true);
          successfulSubscription()
        })
  }

  if(isSubscribed===true){
    return(
      <div className='footerSubscribe'>
      <h3 className='footerSubscribe_h3'>Suscríbete para recibir las mejores promociones</h3>
      <div className='footerSubscribe_div'>
        <h3>¡Gracias por suscribirte a nuestro boletín!</h3>
      </div>
    </div>
    )
  }

  return (
    <div className='footerSubscribe'>
      <h3 className='footerSubscribe_h3'>Suscríbete para recibir las mejores promociones</h3>
      <div className='footerSubscribe_div'>
          <input type='email' name='email' placeholder='Ingresa tu email' value={userEmail.email} onChange={handleChange} className='footerSubscribe_div_input'/>
          {userEmail.email
            ? <button className='footerSubscribe_div_button' onClick={() => subscribe()}>Suscribirse</button>
            : <button className='footerSubscribe_div_button' onClick={() => errorSubscription()}>Suscribirse</button> } 
      </div>
    </div>
  );
};

export default FooterSubscribe;