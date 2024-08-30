import React from "react";
import "../style/Footer.css";
import gitHub from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedIn from '../assets/linkedin.png';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
      <div className="social-images">
        <img src={gitHub} alt="" />
        <img src={instagram} alt="" />
        <img src={linkedIn} alt="" />
      </div>
      <div className="footer-logo">
        <img src={logo} alt="" />
      </div>
      <div className="blur footer-b-1"></div>
      <div className="blur footer-b-2"></div>
    </div>
  );
};

export default Footer;
