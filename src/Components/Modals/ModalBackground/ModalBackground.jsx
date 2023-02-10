import React from "react";
import "./ModalBackground.scss";

const ModalBackground = ({ onOpen, onClose }) => {
  return (
    <div
      className={`${onOpen ? "modalBackground visible" : "modalBackground"}`}
      onClick={onClose}
    />
  );
};

export default ModalBackground;
