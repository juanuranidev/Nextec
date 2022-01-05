import React from 'react'
import NavBar from './NavBar'
import HeaderImage from '../img/test.png'
import '../../styles/layout/header/_Header.scss'

function Header() {
    return (
        <header>
            <NavBar />
            <img src={HeaderImage}/>
        </header>
    )
}

export default Header
