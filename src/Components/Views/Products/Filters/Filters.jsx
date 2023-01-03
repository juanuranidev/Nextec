import React, { useState } from "react";
import "./Filters.scss";

const Filters = ({
  minRangeValue,
  maxRangeValue,
  setMaxRangeValue,
  setMinRangeValue,
  setSearchBarValue,
  handleGetProducts,
}) => {
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
          onChange={(e) => setSearchBarValue(e.target.value)}
        />
      </div>
      <div className="filters_price">
        <h3 className="filters_price_h3">Filtrar por precio</h3>
        <div className="filters_price_div">
          <input
            type="text"
            value={minRangeValue}
            placeholder="Mínimo"
            className="filters_price_div_input"
            onChange={(e) => setMinRangeValue(e.target.value)}
          />
          <input
            type="text"
            value={maxRangeValue}
            placeholder="Máximo"
            className="filters_price_div_input"
            onChange={(e) => setMaxRangeValue(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="filters_brands">
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
      </div> */}
      <div className="filters_reset">
        <button className="filters_reset_button" onClick={handleGetProducts}>
          FILTRAR
        </button>
        <p>Resetear Filtros</p>
      </div>
    </aside>
  );
};

export default Filters;
