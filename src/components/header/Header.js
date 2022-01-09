import React from 'react'
import HeaderImage from '../../images/header/header.jpg'
import './_Header.scss'

function Header() {
    return (
        <img src={HeaderImage} className="imageHeader"/>
    )
}

export default Header
