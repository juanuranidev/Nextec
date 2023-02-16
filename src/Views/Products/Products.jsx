import React, { useState, useEffect } from "react";
import { getAllProductsWithLimitService } from "../../Services/productsService";
import ProductsContainer from "../../Components/ProductsContainer/ProductsContainer";
import Filters from "./Filters/Filters";
import Loader from "../../Components/Loader/Loader";
import "./Products.scss";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(10);
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleGetProducts = async () => {
    setLoading(true);
    try {
      const response = await getAllProductsWithLimitService(productsLimit);
      setProducts(
        response.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
      );
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleFilterProducts = () => {
    if (searchBarValue) {
      return products.filter((product) => {
        if (!searchBarValue) {
          return product;
        } else {
          return product.name
            .toLowerCase()
            .includes(searchBarValue.toLowerCase());
        }
      });
    } else {
      return products;
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [productsLimit]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="products">
      <div className="products_container">
        <Filters
          setSearchBarValue={setSearchBarValue}
          handleGetProducts={handleGetProducts}
        />
        <ProductsContainer products={handleFilterProducts()} />
      </div>
      <div className="products_actions">
        <button
          className="products_actions_button"
          onClick={() => setProductsLimit((prev) => prev + 20)}
        >
          Cargar más productos
        </button>
      </div>
    </section>
  );
};

export default Products;
