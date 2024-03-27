import React from "react";
import logoMain from "../../images/logoMain.svg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logoMain} alt="logo" />
      <div>
        <a className="header_link" href="">
          Job Qualifier
        </a>
        <a className="header_link" href="">
          About Us
        </a>
        <a className="header_link" href="">
          Workflow
        </a>
        <a className="header_link" href="">
          Our Clients
        </a>
        <button className="header_button">Contact Us</button>
      </div>
    </div>
  );
}

export default Header;
