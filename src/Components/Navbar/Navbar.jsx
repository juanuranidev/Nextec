import React, { useState } from "react";
import { useFavoritesContext } from "../../Context/FavoritesContext";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import MenuResponsive from "./MenuResponsive/MenuResponsive";
import ModalBackground from "../Modals/ModalBackground/ModalBackground";
import "./Navbar.scss";

const Navbar = () => {
  const { cartList } = useCartContext();
  const { favorites } = useFavoritesContext();

  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);

  return (
    <nav className="navbar">
      <div className="upperNavbar">
        <div className="upperNavbar_logo">
          <span
            className="fas fa-bars fa-2x upperNavbar_logo_open_menu"
            onClick={() => setOpenMenuResponsive(true)}
          />
          <span className="upperNavbar_logo_span">Logo</span>
        </div>
        <SearchBar />
        <div className="upperNavbar_icons">
          <Link to="/favorites">
            <span
              className="fas fa-heart upperNavbar_icons_span"
              style={{ opacity: favorites.length >= 1 ? "1" : "0.5" }}
            />
          </Link>
          <Link to="/cart">
            <span
              className="fas fa-shopping-cart upperNavbar_icons_span"
              style={{ opacity: cartList.length >= 1 ? "1" : "0.5" }}
            />
          </Link>
        </div>
      </div>
      <div className="lowerNabvar">
        <ul className="lowerNabvar_ul">
          <Link to="/" className="lowerNabvar_ul_a">
            <li className="lowerNabvar_ul_a_li">Inicio</li>
          </Link>
          <Link to="/products" className="lowerNabvar_ul_a">
            <li className="lowerNabvar_ul_a_li">Productos</li>
          </Link>
          <Link to="/about" className="lowerNabvar_ul_a">
            <li className="lowerNabvar_ul_a_li">Nosotros</li>
          </Link>
          <Link to="/contact" className="lowerNabvar_ul_a">
            <li className="lowerNabvar_ul_a_li">Contacto</li>
          </Link>
          <Link to="/contact" className="lowerNabvar_ul_a">
            <li className="lowerNabvar_ul_a_li">Arma tu PC</li>
          </Link>
        </ul>
      </div>
      <MenuResponsive
        onOpen={openMenuResponsive}
        onClose={() => setOpenMenuResponsive(false)}
      />
      <ModalBackground
        onOpen={openMenuResponsive}
        onClose={() => setOpenMenuResponsive(false)}
      />
    </nav>
  );
};

export default Navbar;
