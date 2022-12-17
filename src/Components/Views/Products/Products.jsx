import React, { useState, useEffect } from "react";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  limit,
  where
} from "firebase/firestore";
import ProductsContainer from "../../ProductsContainer/ProductsContainer";
import Filters from "./Filters/Filters";
import Loader from "../../Loader/Loader";
import "./Products.scss";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLimit, setProductsLimit] = useState(10);
  const [categorySelected, setCategorySelected] = useState("");

  const handleGetProducts = () => {
    const dataBase = getFirestore();
    const queryCollection = query(
      collection(dataBase, "items"),
      limit(productsLimit),
    );
    getDocs(queryCollection)
      .then((res) =>
        setProducts(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }
  {
    /*  <CategoryCard link='notebooks' text='Notebooks' />
        <CategoryCard link='placasdevideo' text='Placas de video' />
        <CategoryCard link='computadoras' text='Computadoras' />
        <CategoryCard link='monitores' text='Monitores' />
        orderBy("date", "desc"),
        limit(messagesLimit) */
  }

  useEffect(() => {
    handleGetProducts();
  }, [productsLimit]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="products">
      <div className="container">
        <Filters />
        <ProductsContainer products={products} />
      </div>
      <div className="products_actions">
        <button className="products_actions_button" onClick={() => setProductsLimit((prev) => prev + 20)}>
          Cargar más productos
        </button>
      </div>
    </section>
  );
};

export default Products;
