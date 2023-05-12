import React from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2, BiCartAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Slider from "./images/sealinks_logo.png";
const Navbar = () => {
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
      <ul className="nav-menu">
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
        {/* <li>
          <NavLink to="/travelInfo" className="nav-link">
            TRAVEL INFO
          </NavLink>
        </li> */}

        {/* <li>
          <NavLink to="/faq" className="nav-link">
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link">
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            CONTACT
          </NavLink>
        </li> */}
      </ul>
      <div className="nav-icons">
        <BiSearchAlt2 className="icon" />
        <BiCartAdd className="icon" />
        <FaUserCircle className="icon" />
        <GiHamburgerMenu className="hamburger-bar icon" />
      </div>
    </nav>
  );
};

export default Navbar;
