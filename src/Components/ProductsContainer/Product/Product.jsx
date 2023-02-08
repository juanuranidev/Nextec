import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import { useFavoritesContext } from "../../../Context/FavoritesContext";
import "./Product.scss";

const Product = ({ ...product }) => {
  const { addToCart } = useCartContext();
  const { favorites, handleFavorites } = useFavoritesContext();

  function isInFavorites(product) {
    return favorites.some(function (x) {
      return x.id === product.id;
    });
  }

  const handleAddToCart = (product) => {
    let productToAdd = { ...product, quantity: 1 };
    addToCart(productToAdd);
  };

  return (
    <div className="product">
      <div className="product_top">
        <span
          className={`${
            isInFavorites(product) ? "fas" : "far"
          } far fa-heart product_top_favorite`}
          onClick={() => handleFavorites(product)}
        />
        <Link to={`/products/${product.id}`} className="product_top_a">
          <img src={product.image} className="product_top_a_img" />
          <h2 className="product_top_a_h2">{product.name}</h2>
        </Link>
      </div>
      <div className="product_bottom">
        {product.stock > 0 ? (
          <p className="product_bottom_p disponible">DISPONIBLE</p>
        ) : (
          <p className="product_bottom_p sin_stock">SIN STOCK</p>
        )}
        <p className="product_bottom_price">
          ${product.price.toLocaleString("ar")}
        </p>
      </div>
      <button
        className="product_button"
        onClick={() => handleAddToCart(product)}
      >
        Agregar
      </button>
    </div>
  );
};

export default Product;
