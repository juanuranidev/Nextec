import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import './Navbar.scss';

const Navbar = () => {
    const [searchBar, setSearchBar] = useState(false)

    return (
        <React.Fragment>
            <nav className='nav'>
                <div className='nav_logo'>
                    <span className='nav_logo_span'>Logo</span>
                </div>
                <div className='nav_links'>
                    <ul className='nav_links_ul'>
                        <Link to="/" className='nav_links_ul_a' onClick={() => setSearchBar(false)}><li className='nav_links_ul_a_li' >Inicio</li></Link>
                        <Link to="/products" className='nav_links_ul_a' onClick={() => setSearchBar(false)}><li className='nav_links_ul_a_li' >Productos</li></Link>
                        <Link to="/about" className='nav_links_ul_a' onClick={() => setSearchBar(false)}><li className='nav_links_ul_a_li' >Nosotros</li></Link>
                        <Link to="/contact" className='nav_links_ul_a' onClick={() => setSearchBar(false)}><li className='nav_links_ul_a_li' >Contacto</li></Link>
                        <Link to="/contact" className='nav_links_ul_a' onClick={() => setSearchBar(false)}><li className='nav_links_ul_a_li' >Arma tu PC</li></Link>
                    </ul>
                </div>
                <div className='nav_icons'>
                    {!searchBar && <span className="fa fa-search nav_icons_span" onClick={() => setSearchBar(true)} />}
                    <span className="fas fa-heart nav_icons_span" onClick={() => console.log("Favoritos")}/>
                    <span className="fas fa-shopping-cart nav_icons_span" onClick={() => console.log("Cart")}/>
                </div>
               </nav>
               {searchBar && <SearchBar setSearchBar={setSearchBar} />}  
        </React.Fragment>
    )
}

export default Navbar



        {/* <div className='nav'>
              <span className='nav_span'>Logo</span>
             <div className='nav_searchBar'>
                  <input
                      className='nav_searchBar_input'
                      type="text"
                      placeholder='Busca tu próximo componente'
                      onChange={(e) => setSearchBar(e.target.value)}
                      value={searchBar}
                  />
                  <span className="fa fa-search nav_searchBar_span"/>
                  {products ? (
                      <div className='nav_searchBar_results'>
                      {products.filter(product => {
                          if(debouncedValue == ""){
                              return null
                          } else if(product.name.includes(debouncedValue.toUpperCase())){
                              return product
                      }}).map(product => (
                          <Link to={`/products/${product.id}`} className="searchBar_product" key={product.id} onClick={() => setSearchBar("")}>
                              <div className="searchBar_product_div">
                                  <img src={product.image} className="searchBar_product_div_img"/>
                                  <h2 className='searchBar_product_div_h2'>{product.name}</h2>
                              </div>
                          </Link>
                      ))}
                      </div>
                  ) : <div className="searchBar_product_div">
                          <h2 style={{color: "red"}}>Test</h2>
                      </div> }
              </div>
              <div className='nav_icons'>
                  <span className="fas fa-heart fa-2x nav_icons_span" onClick={() => console.log("test")}/>
                  <span className="fas fa-shopping-cart fa-2x nav_icons_span" onClick={() => console.log("test")}/>
              </div>
          </div>
          <div className='nav_links'>
              <ul className='nav_links_ul'>
                  <Link to="/" className='nav_links_ul_a'><li className='nav_links_ul_a_li'>Inicio</li></Link>
                  <Link to="/products" className='nav_links_ul_a'><li className='nav_links_ul_a_li'>Productos</li></Link>
                  <Link to="/about" className='nav_links_ul_a'><li className='nav_links_ul_a_li'>Nosotros</li></Link>
                  <Link to="/contact" className='nav_links_ul_a'><li className='nav_links_ul_a_li'>Contacto</li></Link>
                  <Link to="/contact" className='nav_links_ul_a'><li className='nav_links_ul_a_li'>Arma tu PC</li></Link>
              </ul>
          </div> */}