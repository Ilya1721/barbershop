import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img
            src="https://barbershop-images.s3.eu-central-1.amazonaws.com/icons/barbershopLogo.png"
            alt="logo"
          />
        </a>
        <a href="/">Khmelnitskiy Barbershop</a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <div className="gamburger">
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
      </div>
      <div className="menu">
        <a href="#services">Послуги</a>
        <a href="#works">Наші роботи</a>
        <a href="#barbers">Перукарі</a>
        <a href="#contacts">Контакти</a>
        <a href="#register">Записатися</a>
      </div>
    </div>
  );
};

export default Navbar;
