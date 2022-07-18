import React, { useEffect, useState } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import useDebouncer from '../Hooks/useDebouncer';
import './Navbar.scss';

const Navbar = () => {
    const [searchBar, setSearchBar] = useState("")
    const [products, setProducts] = useState([])

    const { debouncedValue } = useDebouncer(searchBar, 250)

    useEffect(() => {
        handleGetProducts()
    }, [])

    const handleGetProducts = () => {
        setProducts([])
        try{
            const dataBase = getFirestore()
            const queryCollection = query(collection(dataBase, 'items'))
            
            getDocs(queryCollection)
              .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
              .catch(err => console.log(err))
          } catch(error){
            console.log(error)
          }
    }

  return (
    <nav className='nav'>
        <div className='topNav'>
            <span className='topNav_span'>Logo</span>
            <div className='topNav_searchBar'>
                <input
                    className='topNav_searchBar_input'
                    type="text"
                    placeholder='Busca tu próximo componente'
                    onChange={(e) => setSearchBar(e.target.value)}
                    value={searchBar}
                />
                <span className="fa fa-search topNav_searchBar_span"/>
                {products ? (
                    <div className='topNav_searchBar_results'>
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
            <div className='topNav_icons'>
                <span className="fas fa-heart fa-2x topNav_icons_span" onClick={() => console.log("test")}/>
                <span className="fas fa-shopping-cart fa-2x topNav_icons_span" onClick={() => console.log("test")}/>
            </div>
        </div>
        <div className='bottomNav'>
            <ul className='bottomNav_ul'>
                <Link to="/" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Inicio</li></Link>
                <Link to="/products" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Productos</li></Link>
                <Link to="/about" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Nosotros</li></Link>
                <Link to="/contact" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Contacto</li></Link>
                <Link to="/contact" className='bottomNav_ul_a'><li className='bottomNav_ul_a_li'>Arma tu PC</li></Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar