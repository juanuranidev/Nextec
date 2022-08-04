import React from 'react';
import Socials from '../../Socials/Socials';
import './Info.scss';

const Info = () => {
  return (
    <div className='info'>
        <div className='info_div'>
          <h2 className='info_div_h2'>Atención al Cliente</h2>
          <p className='info_div_p'>+54 3512345678</p>
          <p className='info_div_p'>ventas@gmail.com</p>
          <p className='info_div_p'>Córdoba, Córdoba, Argentina.</p>
          <p className='info_div_p'>Lun a Vie de 8 a 18hs. Sábado de 10 a 14hs.</p>
        </div>
        <div className='info_socials'>
          <h2 className='info_socials_h2'>Redes Sociales</h2>
          <Socials/>
        </div>
    </div>
  );
};

export default Info;