import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_block">
      <div className="container">
        <div className="footer_block_wrap">
          <div className="footer_info_wrap">
            <p>hello@offermaker.com</p>
            <p>&copy; 2024 OFFERMAKER. All rights reserved</p>
          </div>

          <div className="footer_tabs_wrap">
            <a href="">About Us</a>
            <a href="">Workflow</a>
            <a href="">Our Clients</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
