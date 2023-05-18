import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
// import Slider from "./images/sealinks_logo.png";
const Navbar = ({ isNavMenu }) => {
  return (
    <nav className="header-navbar">
      <NavLink to="/" className="main-logo">
        <img
          // src="./images/sealinks_logo.png"
          src="https://sealinkstravel.com/wp-content/uploads/2020/02/sealinks1.png"
          alt="sealinks_logo"
          className="main-logo-img"
        />
      </NavLink>
      <div className="nav-icons">
        <BiSearchAlt2 className="icons " />
        <FaUserCircle className="icons" />
      </div>
      {isNavMenu && (
        <ul className="navigation-menu">
          <li>
            <NavLink to="/ourGallery" className="nav-link gallery">
              Our Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/inboundPackages" className="nav-link inbound">
              Inbound Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/outboundPackages" className="nav-link outbound">
              Outbound Packages
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
