import { Link } from 'react-router-dom'
import React from 'react'
import CarWidget from './CarWidget/CarWidget'
import MenuWidget from './MenuWidget/MenuWidget'
import "./_NavBar.scss"

function NavBar(){
    return(
        <nav> 
            <h2 className="navTitle"><Link to='/'>Savage Store</Link></h2>
            <ul>
                <li className="navLink"><Link to='/'>Inicio</Link></li>
                <div className="navDropdown">
                    <li><Link to='/'>Productos</Link></li>
                    <span className="fas fa-chevron-down" />
                    <div class="dropdownContent">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <li className="navLink"><Link to='/'>Nosotros</Link></li>
                <li className="navLink"><Link to='/'>Contacto</Link></li>
            </ul>
            <div className="navCart"><Link to='/cart'><CarWidget /></Link></div>
            <MenuWidget />
        </nav>
    )
}





export default NavBar;
