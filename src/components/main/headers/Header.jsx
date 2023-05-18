import Navbar from "./Navbar";
import { GrFacebook } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { SiTripadvisor } from "react-icons/si";

const Header = ({isNavMenu}) => {
  return (
    <>
      <div className="header-top-nav">
        <div className="header-contacts-info-social-icons-wrapper">
          <div className="contacts-info-wrapper">
            <span className="contact-info email ">info@sealinks.com.np</span>
            <span className="contact-info number">+977 9801093735</span>
            <span className="contact-info address">
              Nag Pokhari, Kathmandu, Nepal
            </span>
          </div>
          <div className="social-icons-wrapper">
            <GrFacebook className="social-icon" />
            <BsInstagram className="social-icon" />
            <SiTripadvisor className="social-icon" />
          </div>
        </div>
      </div>
      <div className="header-nav-wrapper">
        <Navbar isNavMenu={isNavMenu} />
      </div>
    </>
  );
};

export default Header;
