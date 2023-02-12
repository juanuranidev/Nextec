import React from "react";
import { Link } from "react-router-dom";
import "./MenuResponsive.scss";

export default function MenuResponsive({ onOpen, onClose }) {
  return (
    <div className={onOpen ? "menuResponsive" : "menuResponsive menuClose"}>
      <div className="menuResponsive_close">
        <span
          className="fas fa-times fa-2x menuResponsive_close_span"
          onClick={onClose}
        />
      </div>
      <div className="menuResponsive_links">
        <ul className="menuResponsive_links_ul">
          <Link to="/" className="menuResponsive_links_ul_a" onClick={onClose}>
            <li className="menuResponsive_links_ul_a_li">Inicio</li>
          </Link>
          <Link to="/" className="menuResponsive_links_ul_a" onClick={onClose}>
            <li className="menuResponsive_links_ul_a_li">Productos</li>
          </Link>
          <Link to="/" className="menuResponsive_links_ul_a" onClick={onClose}>
            <li className="menuResponsive_links_ul_a_li">Nosotros</li>
          </Link>
          <Link to="/" className="menuResponsive_links_ul_a" onClick={onClose}>
            <li className="menuResponsive_links_ul_a_li">Contacto</li>
          </Link>
          <Link to="/" className="menuResponsive_links_ul_a" onClick={onClose}>
            <li className="menuResponsive_links_ul_a_li">Arma tu PC</li>
          </Link>
        </ul>
      </div>
      <div className="menuResponsive_bottom">
        <p className="menuResponsive_bottom_p">Tech Store ® 2023</p>
      </div>
    </div>
  );
}
