import React, { useState } from 'react';
import { addDoc, getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import './Newsletter.scss';

const Newsletter = () => {
    const [loader, setLoader] = useState(false)
    const [userEmail, setUserEmail] = useState({email: ''})
    const [isSuscribed, setIsSuscribed] = useState(false)

    const handleSubmit = async(e) => {
        setLoader(true)
        e.preventDefault()
        
        let emailObject = {}
        emailObject.email = userEmail.email
        
        const dataBase = getFirestore()
        
        const emailCollection = collection(dataBase, 'newsletter') 
        const queryCollection = query(emailCollection, where('email', '==', emailObject.email))
        
        try{
          const data = await getDocs(queryCollection)
          if(data.docs.length){
            alert("Ya existe")
          } else {
            await addDoc(emailCollection, emailObject)
            setIsSuscribed(true)
            localStorage.setItem('alreadySuscribed', JSON.stringify(true));
            setIsSuscribed(true)
          }
          setLoader(false)
        } catch(error) {
          console.log(error)
        }
      }

    if(loader){
      return(
        <p>Cargando</p>
      )
    }

    if(isSuscribed){
        return(
            <div className='newsletter_suscribed'>
                <p className='newsletter_suscribed_p'>Has sido suscrito a nuestro newsletter correctamente</p>
            </div>
        )
    }

    return (
        <div className='newsletter'>
            <h2 className='newsletter_h2'>Vamos a cambiar el mundo</h2>
            <h2 className='newsletter_h2'>¿Nos acompañas?</h2>
            <p className='newsletter_p'>Suscríbete para recibir promociones, ingresos y torneos.</p>
            <div className='newsletter_div'>
                <form className='newsletter_div_form' onSubmit={(e) => handleSubmit(e)}>
                    <input 
                      name='email' 
                      type='email' 
                      placeholder='Email Gamer' 
                      value={userEmail.email} 
                      className='newsletter_div_form_input' 
                      onChange={(e) => setUserEmail({...userEmail, [e.target.name]: e.target.value})}
                    />    
                    <button
                        type='submit'
                        className={`newsletter_div_form_button ${!userEmail.email && 'disabled'}`}
                        disabled={!userEmail.email}>
                        UNIRME
                    </button>
                </form>            
            </div>
        </div>
    );
}

export default Newsletter;