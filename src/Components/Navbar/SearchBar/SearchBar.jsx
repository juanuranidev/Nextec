import React, { useState, useEffect, useRef } from "react";
import { getAllProductsService } from "../../../Services/productsService";
import { Link } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  const [products, setProducts] = useState(null);
  const [inputText, setInputText] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchBarResultsRef = useRef(null);

  const handleGetAllProducts = async () => {
    try {
      const response = await getAllProductsService();
      setProducts(
        response.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckClickOutside = (event) => {
    if (
      searchBarResultsRef.current &&
      !searchBarResultsRef.current.contains(event.target)
    ) {
      setShowResults(false);
    }
  };

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleCheckClickOutside);
    return () => {
      document.removeEventListener("click", handleCheckClickOutside);
    };
  }, []);

  return (
    <div className="searchBar">
      <input
        className="searchBar_input"
        type="text"
        placeholder="Busca tu próximo componente"
        onChange={(e) => {
          setShowResults(true);
          setInputText(e.target.value);
        }}
        value={inputText}
      />
      {/* <span className="fa fa-search searchBar_span" /> */}
      {showResults && (
        <div className="searchBar_results" ref={searchBarResultsRef}>
          {products
            .filter((product) => {
              if (inputText == "") {
                return null;
              } else if (
                product.name.toLowerCase().includes(inputText.toLowerCase())
              ) {
                return product;
              }
            })
            .map((product) => (
              <Link
                to={`/products/${product.id}`}
                className="searchBar_product"
                key={product.id}
                onClick={() => {
                  setInputText("");
                }}
              >
                <div className="searchBar_product_div">
                  <img
                    src={product.image}
                    className="searchBar_product_div_img"
                  />
                  <h2 className="searchBar_product_div_h2">{product.name}</h2>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
