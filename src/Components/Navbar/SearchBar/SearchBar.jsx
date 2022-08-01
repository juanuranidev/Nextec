import React, { useState, useEffect } from 'react'
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'
import useDebouncer from '../../Hooks/useDebouncer'
import './SearchBar.scss';

const SearchBar = () => {
    const [products, setProducts] = useState(null)
    const [inputText, setInputText] = useState("")
    
    const { debouncedValue } = useDebouncer(inputText, 250)

    useEffect(() => {
        try{
            const dataBase = getFirestore()
            const queryCollection = query(collection(dataBase, 'items'))
            
            getDocs(queryCollection)
                .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
                .catch(err => console.log(err))
          } catch(error){
                console.log(error)
          }
    }, [])

    return (
        <div className='searchBar'>
            <input
                className='searchBar_input'
                type="text"
                placeholder='Busca tu próximo componente'
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
            />
            <span className="fa fa-search searchBar_span"/>
            <div className='searchBar_results'>
                {products !== null && products.filter(product => {
                    if(debouncedValue == ""){
                        return null
                    } else if(product.name.includes(debouncedValue.toUpperCase())){
                        return product
                }}).map(product => (
                    <Link to={`/products/${product.id}`} className="searchBar_product" key={product.id} onClick={() =>{setInputText("")}}>
                        <div className="searchBar_product_div">
                            <img src={product.image} className="searchBar_product_div_img"/>
                            <h2 className='searchBar_product_div_h2'>{product.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
    </div>
    )
}

export default SearchBar