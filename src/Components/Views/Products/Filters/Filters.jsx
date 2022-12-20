import React, { useState } from "react";
import "./Filters.scss";

const Filters = ({ rangeValue, setRangeValue, handleGetProducts }) => {
  const [brand, setBrand] = useState("");

  const handleBrands = (e) => setBrand(e.target.value);

  return (
    <aside className="filters">
      <h2 className="filters_h2">Filtros</h2>
      <div className="filters_searchbar">
        <input
          type="text"
          className="filters_searchbar_input"
          placeholder="Buscar..."
          onChange={(e) => console.log(e.target.value)}
        />
      </div>
      <div className="filters_categories">
        <h3 className="filters_categories_h3">Categorias</h3>
        <p className="filters_categories_p">CATEGORIA 1</p>
        <p className="filters_categories_p">CATEGORIA 2</p>
        <p className="filters_categories_p">CATEGORIA 3</p>
      </div>
      <div className="filters_price">
        <h3 className="filters_price_h3">Precio Máximo</h3>
        <input
          className="text"
          type="range"
          label="Precio Mínimo"
          min={0}
          max={500000}
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />
        <input
          className="text"
          type="range"
          label="Precio Máximo"
          min={0}
          max={500000}
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />
        <p className="filters_price_p">
          ${0} - ${!rangeValue ? (500000).toLocaleString("ES-ar") : (rangeValue).toLocaleString("ES-ar")}
        </p>
      </div>
      <div className="filters_brands">
        <h3 className="filters_brands_h3">Marcas</h3>
        <label className="filters_brands_label">
          <input
            type="radio"
            name="1"
            value="1"
            checked={brand === "1"}
            onChange={(e) => handleBrands(e)}
            className="filters_brands_label_input"
          />
          Colectivo
        </label>
        <label className="filters_brands_label">
          <input
            type="radio"
            name="2"
            value="2"
            checked={brand === "2"}
            onChange={(e) => handleBrands(e)}
            className="filters_brands_label_input"
          />
          Colectivo
        </label>
        <label className="filters_brands_label">
          <input
            type="radio"
            name="3"
            value="3"
            checked={brand === "3"}
            onChange={(e) => handleBrands(e)}
            className="filters_brands_label_input"
          />
          Colectivo
        </label>
        <label className="filters_brands_label">
          <input
            type="radio"
            name="4"
            value="4"
            checked={brand === "4"}
            onChange={(e) => handleBrands(e)}
            className="filters_brands_label_input"
          />
          Colectivo
        </label>
      </div>
      <div className="filters_reset">
        <button className="filters_reset_button" onClick={handleGetProducts}>Resetear</button>
      </div>
    </aside>
  );
};

export default Filters;
