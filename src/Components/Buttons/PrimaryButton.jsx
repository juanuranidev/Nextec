import React from "react";
import "./PrimaryButton.scss";

export default function PrimaryButton({ onClick, text, type, disabled }) {
  return (
    <button
      onClick={onClick}
      className="primaryButton"
      type={type ? type : "button"}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
