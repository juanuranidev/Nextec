import { Link } from 'react-router-dom';
import React from 'react';
import CarWidget from '../CarWidget/CarWidget';
import MenuWidget from '../MenuWidget/MenuWidget';
import "./_NavBar.scss";

function NavBar(){
    return(
        <nav> 
            <Link to='/' className="title"><h2>Savage Store</h2></Link>
            <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/'><li>Productos</li></Link>
            <Link to='/'><li>Nosotros</li></Link>
            <Link to='/'><li>Contacto</li></Link>
            </ul>
            <Link to='/cart'><CarWidget /></Link>    
            <MenuWidget />
        </nav>
    )
}

export default NavBar;
