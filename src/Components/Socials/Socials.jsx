import React from 'react';
import './Socials.scss';

const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://twitter.com/elonmusk' target='_blank' className='socials_a fab fa-facebook fa-2x' />
        <a href='https://www.instagram.com/therock/' target='_blank' className='socials_a fab fa-instagram fa-2x' />
        <a href='https://twitter.com/elonmusk' target='_blank' className='socials_a fab fa-twitter fa-2x' />
        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' className='socials_a fab fa-youtube fa-2x' />
    </div>
  );
};

export default Socials;