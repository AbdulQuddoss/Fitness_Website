import React, { useState } from "react";
import "../style/Header.css";
import Logo from "../assets/logo.png";
import bars from "../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;

  function openBar() {
    setIsOpen(true);
  }

  function closeBar() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <img src={Logo} alt="Loading..." className="logo" />

      {isOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={openBar}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={closeBar} to="home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeBar} to="programs" span={true} smooth={true}>
              programs
            </Link>
          </li>
          <li>
            <Link onClick={closeBar} to="whyus" span={true} smooth={true}>
              Wht us
            </Link>
          </li>
          <li>
            <Link onClick={closeBar} to="plan" span={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={closeBar} to="testimonials" span={true}smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
