import { Link } from 'react-router-dom'
import React from 'react'
import CarWidget from './CarWidget/CarWidget'
import MenuWidget from './MenuWidget/MenuWidget'
import "./_NavBar.scss"

function NavBar(){
    return(
    <nav>
        {/* <!-- <span className="fas fa-bars bx bx-menu fa-2x"></span> --> */}
        <span className="fas fa-bars closeMenu" />
        <div className="navLogo">
            <Link to="/" className="navLogoLink">Savage Store</Link>
        </div>
        <div className="navLinks">
            <div className="sidebarLogo">
                <h2>SavageStore</h2>
                <i className='bx bx-x' />
            </div>
            <ul className="links">
                <li className="link"><Link to="/">Inicio</Link></li>
                <li className="link">
                    <a href="#">Categorías<i className="fas fa-chevron-down arrow" /></a>
                    <ul className="subMenu">
                        <li className="subMenuLink"><a href="#">Notebooks</a></li>
                        <li className="subMenuLink"><a href="#">Celulares</a></li>
                        <li className="subMenuLink"><a href="#">Computadoras</a></li>
                    </ul>
                </li>
                <li className="link"><a href="#">Nosotros</a></li>
                <li className="link"><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className="navCart"><Link to="/cart"><CarWidget /></Link></div>
    </nav>
    )
}





export default NavBar;
