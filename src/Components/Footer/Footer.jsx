import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Links from './Links/Links';
import Info from './Info/Info';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_info'>
        <Info/>
      </div>
      <div className='footer_links'>
        <Links/>
      </div>
      <div className='footer_newsletter'>
        <Newsletter/>
      </div>
    </footer>
  );
};

export default Footer;