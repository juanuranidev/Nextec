import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

const Product = ({...product}) => {
  return (
    <div className='product'>
      <div className='product_top'>
        <span className='far fa-heart product_top_favorite' />
        <Link to={`/products/${product.id}`} className='product_top_a'>
          <img src={product.image} className='product_top_a_img'/>
          <h2 className='product_top_a_h2'>{product.name}</h2>
        </Link>
      </div>
      <div className='product_bottom'>
          {product.stock > 0
          ? <p className='product_bottom_p disponible'>DISPONIBLE</p>
          : <p className='product_bottom_p sin_stock'>SIN STOCK</p>}
          <p className='product_bottom_price'>${(product.price).toLocaleString("ar")}</p>
      </div>
      <button className='product_button' onClick={() => console.log("test")}>Agregar</button>
    </div>
  );
};

export default Product;