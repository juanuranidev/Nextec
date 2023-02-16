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
        <div className="product_top_favorite">
          <span
            className={`${
              isInFavorites(product) ? "fas" : "far"
            } far fa-heart product_top_favorite_span`}
            onClick={() => handleFavorites(product)}
          />
        </div>
        <div className="product_top_link">
          <Link to={`/products/${product.id}`} className="product_top_link_a">
            <img src={product.image} className="product_top_link_a_img" />
            <h2 className="product_top_link_a_h2">{product.name}</h2>
          </Link>
        </div>
      </div>
      <div className="product_bottom">
        <div className="product_bottom_price">
          {product.stock > 0 ? (
            <div className="product_bottom_price_available">
              <p className="product_bottom_price_available_p">DISPONIBLE</p>
              <p className="product_bottom_price_available_price">
                ${product.price.toLocaleString("ar")}
              </p>
            </div>
          ) : (
            <div className="product_bottom_price_unavailable">
              <p className="product_bottom_price_unavailable_p">SIN STOCK</p>
              <p className="product_bottom_price_unavailable_price">
                ${product.price.toLocaleString("ar")}
              </p>
            </div>
          )}
        </div>
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
