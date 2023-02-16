import React from "react";
import Nextec from "../../Assets/Images/Logo/Nextec.png";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader_img" src={Nextec} />
    </div>
  );
};

export default Loader;
