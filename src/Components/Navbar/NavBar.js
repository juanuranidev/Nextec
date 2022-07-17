import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import OpenMenuWidget from './OpenMenuWidget/OpenMenuWidget'
import CloseMenuWidget from './CloseMenuWidget/CloseMenuWidget'
import NavBarLink from './NavbarLink/NavBarLink'
import FavoritesWidget from './FavoritesWidget/FavoritesWidget'
import CartWidget from './CartWidget/CartWidget'
// import "./_NavBar.scss"

function NavBar(){
    const[menu, setMenu] = useState(false)
    
    const openMenu = () => setMenu(true)
    const closeMenu = () => setMenu(false)
    
    return(
    <nav className="nav">
        <OpenMenuWidget onClick={openMenu} />
        <div className="navLogo">
            <Link to="/" className="navLogo_a" onClick={closeMenu}>Techno Store</Link>
        </div>
        <div className={menu===false?'navLinks':'navLinks active'} >
            <div className="sidebarLogo">
                <h2>Techno Store</h2>
                <CloseMenuWidget onClick={closeMenu} />
            </div>
            <ul className="navLinks_ul">
                <NavBarLink class="navLinks_ul_li" link="/" name="Inicio" onClick={closeMenu}/>
                <li className="navLinks_ul_li">
                <Link to="/">Categorías<span className="fas fa-chevron-down arrow navLinks_ul_li_span" /></Link>
                    <ul className="navLinks_ul_li_ul">
                        <NavBarLink class="navLinks_ul_li_ul_li" link="/category/notebooks" name="Notebooks" onClick={closeMenu} />
                        <NavBarLink class="navLinks_ul_li_ul_li" link="/category/placasdevideo" name="Placas de Video" onClick={closeMenu} />
                        <NavBarLink class="navLinks_ul_li_ul_li" link="/category/computadoras" name="Computadoras" onClick={closeMenu} />
                        <NavBarLink class="navLinks_ul_li_ul_li" link="/category/monitores" name="Monitores" onClick={closeMenu} />
                    </ul>
                </li>
                <NavBarLink class="navLinks_ul_li" link="/about" name="Nosotros" onClick={closeMenu}/>
                <NavBarLink class="navLinks_ul_li" link="/contact" name="Contacto" onClick={closeMenu}/>
            </ul>
        </div>
        
        <div className="navCart">
        <FavoritesWidget onClick={closeMenu}/>
        <CartWidget onClick={closeMenu}/>
        </div>
    </nav>
    )
}

export default NavBar;