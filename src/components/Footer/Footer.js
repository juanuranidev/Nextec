import React from 'react';
import FooterInfo from './FooterInfo/FooterInfo';
import FooterSocials from './FooterSocials/FooterSocials';
import FooterSubscribe from './FooterSubscribe/FooterSubscribe';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footerMainContent'>  
        <FooterInfo />
        <FooterSocials />
        <FooterSubscribe />
      </div>
      <div className='footerSecondContent'>
        <span className='fas fa-code footerSecondContent_span' />
        <p className='footerSecondContent_p'>by <a href='https://juanuranidev.github.io/portfolio/' target='_blank' rel='noreferrer' className='footerSecondContent_p_a'>Juan</a></p>
      </div>
    </footer>
  );
};

export default Footer;