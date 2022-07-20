import React, { useState } from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    const [loader, setLoader] = useState(false)
    const [isSuscribed, setIsSuscribed] = useState(false)
    const [userEmail, setUserEmail] = useState({email: ''})

    const handleSetUserEmail = (e) => setUserEmail({...userEmail, [e.target.name] : e.target.value})

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
            <h2 className='newsletter_h2'>Vamos a cambiar el mundo del gaming</h2>
            <h2 className='newsletter_h2'>¿Nos acompañas?</h2>
            <p className='newsletter_p'>Suscríbete para recibir promociones, nuevos ingresos, torneos y beneficios.</p>
            <div className='newsletter_div'>
                <form className='newsletter_div_form'>
                    <input 
                      name='email' 
                      type='email' 
                      placeholder='Email Game                      ' 
                      value={userEmail.email} 
                      className='newsletter_div_form_input' 
                      onChange={(e) => handleSetUserEmail(e)}
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