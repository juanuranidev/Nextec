import React from 'react';
import './Product.scss';

const Product = ({...product}) => {
  return (
    <div className='product'>
        <div className='product_top'>
            <img src={product.image} className='product_top_img'/>
            <h2 className='product_top_h2'>{product.name}</h2>
        </div>
        <div className='product_bottom'>
            {product.stock > 0
            ? <p className='product_bottom_p disponible'>DISPONIBLE</p>
            : <p className='product_bottom_p sin_stock'>SIN STOCK</p>}
            <p className='product_bottom_price'>${(product.price).toLocaleString("ar")}</p>
        </div>
        <div className='product_actions'>
        <button className='product_actions_button' onClick={() => console.log("test")}>Agregar</button>
        </div>
    </div>
  );
};

export default Product;