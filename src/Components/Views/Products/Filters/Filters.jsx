import React from "react";
import "./Filters.scss";

const Filters = ({
  minRangeValue,
  maxRangeValue,
  setMaxRangeValue,
  setMinRangeValue,
  setSearchBarValue,
  handleGetProducts,
}) => {
  const handleResetFilters = () => {
    setMaxRangeValue("");
    setMinRangeValue("");
    setSearchBarValue("");
    handleGetProducts();
  };

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
      <div className="filters_reset">
        <button className="filters_reset_button" onClick={handleGetProducts}>
          FILTRAR
        </button>
        <p className="filters_reset_p" onClick={handleResetFilters}>
          Resetear filtros
        </p>
      </div>
    </aside>
  );
};

export default Filters;
