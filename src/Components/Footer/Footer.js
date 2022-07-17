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
        <p className='footerSecondContent_p'>Made with <span className='fa fa-heart footerSecondContent_p_span'/> by <a href='https://juanurani.netlify.app/' target='_blank' rel='noopener noreferrer' className='footerSecondContent_p_a' >Juan</a></p>
      </div>
    </footer>
  );
};

export default Footer;