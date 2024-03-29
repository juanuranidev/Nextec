import React from "react";
import Product from "./Product/Product";
import "./ProductsContainer.scss";

const ProductsContainer = ({ products }) => {
  return (
    <div className="productsContainer">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
