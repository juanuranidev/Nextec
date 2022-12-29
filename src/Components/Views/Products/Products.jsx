import React, { useState, useEffect } from "react";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  limit,
  where,
} from "firebase/firestore";
import ProductsContainer from "../../ProductsContainer/ProductsContainer";
import Filters from "./Filters/Filters";
import Loader from "../../Loader/Loader";
import "./Products.scss";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [productsLimit, setProductsLimit] = useState(10);
  const [categorySelected, setCategorySelected] = useState("");
  const [rangeValue, setRangeValue] = useState(500000);
  const [minRangeValue, setMinRangeValue] = useState("");
  const [maxRangeValue, setMaxRangeValue] = useState("");

  const handleGetProducts = () => {
    const dataBase = getFirestore();
    const queryCollection = query(
      collection(dataBase, "items"),
      limit(productsLimit),
      where("price", "<=", rangeValue)
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
      console.log(
        products.filter((product) => {
          if (!searchBarValue) {
            return product;
          } else {
            return product.name
              .toLowerCase()
              .includes(searchBarValue.toLowerCase());
          }
        })
      );
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
          rangeValue={rangeValue}
          maxRangeValue={maxRangeValue}
          setMinRangeValue={setMinRangeValue}
          setMaxRangeValue={setMaxRangeValue}
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
