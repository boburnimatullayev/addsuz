import React from "react";
import "./brandes.scss";
import img from "./aple.jpg";

const Brandes = () => {
  return (
    <div className="brandes-con">
      <div className="btand-title-con">
        <p className="brand-title">Brand</p>
        <p className="brand-link">See all</p>
      </div>
      <div className="brand-con-page">
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
        <div className="brand">
          <img src={img} alt="" />
          <p className="brand-title">apple</p>
        </div>
      
      </div>
    </div>
  );
};

export default Brandes;
