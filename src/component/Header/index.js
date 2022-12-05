import React from "react";
import "./styles.css";

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <div className="header-avatar">
        <div className="header-avatar--circle">B</div>
        <div className="header-avatar--name">Brooklyn</div>
      </div>
      <div className="header-menu">
        <div className="header-menu--item">Home</div>
        <div className="header-menu--item">About</div>
        <div className="header-menu--item">Process</div>
        <div className="header-menu--item">Portfolio</div>
        <div className="header-menu--item">Blog</div>
        <div className="header-menu--item">Services</div>
        <div className="header-menu--item">Contact</div>
      </div>
    </div>
  </div>
);

export default Header;
