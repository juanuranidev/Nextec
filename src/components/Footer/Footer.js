import React from 'react';
import './_Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <span className="fas fa-code footer_span" />
        <p className="footer_p">by <a href='https://juanuranidev.github.io/portfolio/' target="_blank" className="footer_p_a">Juan</a></p>
    </footer>
  );
};

export default Footer;