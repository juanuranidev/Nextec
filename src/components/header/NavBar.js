import React from 'react';
import CarWidget from './CarWidget';
import MenuWidget from './MenuWidget';
import "./_NavBar.scss";

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
            <MenuWidget />
        </nav>
    )
}

export default NavBar;
