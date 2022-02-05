import React from 'react';
import './_FooterSocials.scss';

const FooterSocials = () => {
  return (
    <div className='footerSocials'>
      <h3 className='footerSocials_h3'>Redes Sociales</h3>
      <div className='footerSocials_div'>
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' className='footerSocials_div_a fab fa-youtube fa-3x' />
        <a href='https://www.instagram.com/officialrickastley/' target='_blank' className='footerSocials_div_a fab fa-instagram fa-3x' />
        <a href='https://twitter.com/rickastley' target='_blank' className='footerSocials_div_a fab fa-twitter fa-3x' />
      </div>
    </div>
  );
};

export default FooterSocials;