import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='topNav'>
            <span className='topNav_span'>Logo</span>
            <div className='topNav_searchBar'>
                <input className='topNav_searchBar_input' type="text" placeholder='Busca tu próximo componente'/>
                <span className="fa fa-search topNav_searchBar_span" />
            </div>
            <div className='topNav_icons'>
                <span className="fas fa-heart fa-2x topNav_icons_span" onClick={() => console.log("test")}/>
                <span className="fas fa-shopping-cart fa-2x topNav_icons_span" onClick={() => console.log("test")}/>
            </div>
        </div>
        <div className='bottomNav'>
            <ul className='bottomNav_ul'>
                <Link to="/" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Inicio</li></Link>
                <Link to="/" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Productos</li></Link>
                <Link to="/about" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Nosotros</li></Link>
                <Link to="/contact" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Contacto</li></Link>
                <Link to="/contact" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Arma tu PC</li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar