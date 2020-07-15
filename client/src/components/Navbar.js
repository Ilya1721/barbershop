import React from "react";
import PropTypes from "prop-types";
import logo from "../images/barbershopLogo.png";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar-item navbar-logo">
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" className="navbar-link">
          Ціни
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" className="navbar-link">
          Перукарі
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" className="navbar-link">
          Контакти
        </a>
      </div>
      <div className="navbar-item">
        <a href="#" className="navbar-link">
          Записатися
        </a>
      </div>
    </div>
  );
};

export default Navbar;
