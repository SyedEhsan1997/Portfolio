import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link to="home" smooth={true} className="desktopMenuListItem">
          Home
        </Link>
        <Link to="about" smooth={true} className="desktopMenuListItem">
          About
        </Link>
        <Link to="portfolio" smooth={true} className="desktopMenuListItem">
          Portfolio
        </Link>
        <Link to="client" smooth={true} className="desktopMenuListItem">
          Client
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
