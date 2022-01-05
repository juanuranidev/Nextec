import React from 'react';
import CarWidget from './CarWidget';
import "../../styles/layout/header/_NavBar.scss";

function NavBar(){
    return(
        <nav>
            <h2><a href="#">Savage Store</a></h2>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
            <CarWidget />
        </nav>
    )
}

export default NavBar;