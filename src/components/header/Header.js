import React from 'react'
import './_Header.scss'

function Header() {
    return (
        <header className="header">
            <div className="headerContent">
                <h1>Bienvenido a nuestra tienda</h1>
            </div>
            <div className="headerArrow">
            <a href='#catalogo'><span className="fas fa-chevron-down fa-4x arrow" /></a>
            </div>
        </header>
        
    )
}

export default Header
