import React from 'react';
import './Title.scss';

function Title({text}) {
    return (
        <h2 className='title' id='title'>{text}</h2>
    )
}

export default Title;