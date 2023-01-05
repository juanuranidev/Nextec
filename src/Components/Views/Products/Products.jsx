import React, { useState, useEffect } from "react";
import {
  query,
  limit,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";
import Loader from "../../Loader/Loader";
import Filters from "./Filters/Filters";
import ProductsContainer from "../../ProductsContainer/ProductsContainer";
import "./Products.scss";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(10);
  const [minRangeValue, setMinRangeValue] = useState("");
  const [maxRangeValue, setMaxRangeValue] = useState("");
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleGetProducts = () => {
    const dataBase = getFirestore();
    const queryCollection = query(
      collection(dataBase, "items"),
      limit(productsLimit),
      // where("price", "<=", maxRangeValue),
      // where("price", ">=", minRangeValue)
    );
    getDocs(queryCollection)
      .then((res) =>
        setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
      <div className="container">
        <Filters
          minRangeValue={minRangeValue}
          maxRangeValue={maxRangeValue}
          setMinRangeValue={setMinRangeValue}
          setMaxRangeValue={setMaxRangeValue}
          setSearchBarValue={setSearchBarValue}
          handleGetProducts={handleGetProducts}
        />
        <ProductsContainer products={handleFilterProducts()} />
      </div>
      {products === productsLimit.length ? (
        <div className="products_actions">
          <button
            className="products_actions_button"
            onClick={() => setProductsLimit((prev) => prev + 20)}
          >
            Cargar más productos
          </button>
        </div>
      ) : null}
    </section>
  );
};

export default Products;
