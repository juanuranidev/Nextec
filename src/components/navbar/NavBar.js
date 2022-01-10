import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CarWidget from './CarWidget/CarWidget'
import OpenMenuWidget from './OpenMenuWidget/OpenMenuWidget'
import CloseMenuWidget from './CloseMenuWidget/CloseMenuWidget'
import NavBarLink from './NavbarLink/NavBarLink'
import "./_NavBar.scss"

function NavBar(){
    const[menu, setMenu] = useState(false)

    const openMenu = () => setMenu(true)
    const closeMenu = () => setMenu(false)
    
    let navMenu = 'navLinks '
    if(menu!=false) {navMenu += 'active'}
    
    return(
    <nav>
        <OpenMenuWidget onClick={openMenu} />
        <div className="navLogo">
            <Link to="/" className="navLogoLink">Savage Store</Link>
        </div>
        <div className={navMenu} >
            <div className="sidebarLogo">
                <h2>SavageStore</h2>
                <CloseMenuWidget onClick={closeMenu} />
            </div>
            <ul className="links">
                <NavBarLink class="link" link="/" name="Inicio" onClick={closeMenu}/>
                
                <li className="link">
                <Link to="/">Categorías<i className="fas fa-chevron-down arrow" /></Link>
                    <ul className="subMenu">
                        <NavBarLink class="subMenuLink" link="/" name="Notebooks" onClick={closeMenu} />
                        <NavBarLink class="subMenuLink" link="/" name="Celulares" onClick={closeMenu} />
                        <NavBarLink class="subMenuLink" link="/" name="Computadoras" onClick={closeMenu} />
                    </ul>
                </li>
                <NavBarLink class="link" link="/" name="Nosotros" onClick={closeMenu}/>
                <NavBarLink class="link" link="/" name="Contacto" onClick={closeMenu}/>
            </ul>
        </div>
        <div className="navCart"><Link to="/cart"><CarWidget  onClick={closeMenu}/></Link></div>
    </nav>
    )
}





export default NavBar;
