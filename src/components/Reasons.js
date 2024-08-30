import React from "react";
import "../style/Reasons.css";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import nike from "../assets/nike.png";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons">
      <div className="left-s">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="right-s">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why </span>
          <span>choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>out 140+ expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train members and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>one free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partners</span>
          </div>
        </div>

        <span>our partners</span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
