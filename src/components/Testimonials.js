import React, { useState } from "react";
import "../style/Testimonials.css";
import { testimonialsData } from "../data/testimonialsData";
import rightArrow from "../assets/rightArrow.png";
import leftArrow from "../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [select, setSelect] = useState(0);
  const totalLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials-left">
        <span>Testimonials</span>
        <span className="stroke-text">What They</span>
        <span>say about us</span>
        <motion.span
        key={select}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 100 }}
        transition={transition}
        >{testimonialsData[select].review}</motion.span>
        <span>
          <span>{testimonialsData[select].name}</span> -{" "}
          {testimonialsData[select].status}
        </span>
      </div>
      <div className="testimonials-right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={select}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -100 }}
          transition={transition}
          src={testimonialsData[select].image}
          alt="Loading..."
        />
        <div className="arrow">
          <img
            src={leftArrow}
            onClick={() => {
              select === 0
                ? setSelect(totalLength - 1)
                : setSelect((prev) => prev - 1);
              console.log(select);
            }}
            alt=""
          />
          <img
            src={rightArrow}
            onClick={() => {
              select === totalLength - 1
                ? setSelect(0)
                : setSelect((prev) => prev + 1);
              console.log(select);
            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
