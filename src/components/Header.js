import React from "react";
import "./Header.css";
import logoImage from "../icons/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">DRS</span>
        <img src={logoImage} alt="Logo" className="logo-image" />
      </div>
      <div className="icons">
        <span className="icon">🔔</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
