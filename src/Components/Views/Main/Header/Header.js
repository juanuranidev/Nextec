import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header className='header'>
            <div className='header_text'>
                <h1 className='header_text_h1'>Diseñado por gamers.</h1>
                <h2 className='header_text_h2'>Para gamers.</h2>
            </div> 
            <div className='header_arrow'>
                <a href='#title' className='header_arrow_a'><span className='fas fa-chevron-down fa-4x header_arrow_span' /></a>
            </div>
        </header>
    );
};

export default Header;