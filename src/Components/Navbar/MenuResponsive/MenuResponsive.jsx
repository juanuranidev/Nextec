import React from "react";
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
    </div>
  );
}
