import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Info from './Info/Info';
import './_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <Info/>
      <div className='footer_newsletter'>
        <Newsletter/>
      </div>
    </footer>
  );
};

export default Footer;