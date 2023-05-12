import React from "react";
import { NavLink } from "react-router-dom";
import { ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";

const FooterSection2 = () => {
  return (
    <div className="footer-section-2">
      <h2 className="company-logo">Sealinks Holidays</h2>
      <div className="section-nav">
        <NavLink className="nav-item">About Us</NavLink>
        <hr className="nav-hr-line" />
        <NavLink className="nav-item">Our Gallery</NavLink>
        <hr className="nav-hr-line" />
        <NavLink className="nav-item">Travel Info</NavLink>
        <hr className="nav-hr-line" />
        <NavLink className="nav-item">FAQ</NavLink>
        <hr className="nav-hr-line" />
        <NavLink className="nav-item">Blog</NavLink>
      </div>
      <div className="social-media-icons">
        <ImFacebook2 className="icons" />
        <BsInstagram className="icons" />
        <FaTripadvisor className="icons" />
      </div>
      <div className="copyright-text">
        © Copyrights {new Date().getFullYear()} Sealinks Holidays Pvt. Ltd. |
        All Rights Reserved | Developed by Next Aussie Tech - Kathmandu
      </div>
    </div>
  );
};

export default FooterSection2;
