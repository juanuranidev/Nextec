import React from 'react';
import { Link } from 'react-router-dom';
import brokenPc from './img/brokenPc.png';
import './_PageNotFound.scss';

const PageNotFound = () => {
  return (
    <section className='pageNotFound'>
      <div className='pageNotFoundContent'>
        <img src={brokenPc} alt='Broken PC' className='pageNotFoundContent_img' />
        <h2 className='pageNotFoundContent_h2'>Error 404</h2>
        <p className='pageNotFoundContent_p'>La página no fue encontrada</p>
        <button className='pageNotFoundContent_button'><Link to='/' className='pageNotFoundContent_button_a' >Volver al inicio</Link></button>
      </div>
    </section>
  );
};

export default PageNotFound;