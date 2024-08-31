import React from "react";
import "../style/Hero.css";
import Header from "./Header";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
//hello
const hero = () => {
  const transition = {type: 'spring', duration: 3};
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="hero-L">
        {/* header section */}
        <Header />

        {/* best add section in the hero */}
        <div className="the-best-add">
          <motion.div
          initial={{left: mobile ? '145px' : '238px'}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} delay="4" preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter start={500} end={978} delay="4" preFix="+"/>
            </span>
            <span>member joined</span>
          </div>
          <div>
            <span>
            <NumberCounter start={20} end={50} delay="4" preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="hero-R">
        <button className="btn">Join Now</button>

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="Loading..." />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="Loading..." className="hero-image" />
        <motion.img
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back}
          alt="Loading..."
          className="hero-image-back"
        />

        {/* calories */}
        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={calories} alt="Loading..." />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
