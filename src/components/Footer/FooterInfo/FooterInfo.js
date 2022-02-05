import React from 'react';
import './_FooterInfo.scss';

const FooterInfo = () => {
  return (
    <div className='footerInfo'>
      <div className='footerInfoContent'>
        <h3 className='footerInfoContent_h3'>Horarios</h3>
        <div className='footerInfoContent_div'>
          <p className='footerInfoContent_div_p'>Lunes a Viernes de 10h a 17h</p> 
          <p className='footerInfoContent_div_p'>Sabados de 10h a 14h</p>
        </div>     
      </div>
      <div className='footerInfoContent'>
        <h3 className='footerInfoContent_h3'>Contacto</h3>
        <div className='footerInfoContent_div'>
          <p className='footerInfoContent_div_p'>+54 3512900942</p>
          <p className='footerInfoContent_div_p'>juanuranidev@gmail.com</p>
        </div>     
      </div>
    </div>
  );
};

export default FooterInfo;