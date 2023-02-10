import React from "react";
import "./MenuResponsive.scss";

export default function MenuResponsive({ onOpen }) {
  return (
    <div
      className={onOpen ? "menuResponsive" : "menuResponsive menuClose"}
    ></div>
  );
}
