import React from 'react'
import './_Header.scss'

function Header({text}) {
    return (
        <header className="header">
            <div className="headerContent">
                <h1 className="headerContent_h1">{text}</h1>
            </div>
            <div className="headerArrow">
                <a href='#title' className="headerArrow_a"><span className="fas fa-chevron-down fa-4x headerArrow_a_span" /></a>
            </div>
        </header>
    )
}

export default Header