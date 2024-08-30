import React from "react";
import "../style/Programs.css";
import {programsData} from "../data/programsData.js";
import rightArrow from "../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* programs categories */}
      <div className="programs-categories">
        {programsData.map((curElem, index) => {
          return (
            <div className="category">
              {curElem.image}
              <span>{curElem.heading}</span>
              <span>{curElem.details}</span>
              <div className="join-now">
                <span>Join Now</span>
                <img src={rightArrow} alt="Loading..." />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
