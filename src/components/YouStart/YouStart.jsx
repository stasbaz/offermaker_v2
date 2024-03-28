import React from "react";
import Checkmark from "../../images/Checkmark.svg";
import pointer from "../../images/pointer.png";
import "./YouStart.css";

function YouStart() {
  return (
    <div className="start_section">
      <div className="start_container">
        <div className="start_wrap">
          <div className="start_title_wrap">
            <h2 className="start_title">
              You Start <br /> Here
            </h2>
          </div>

          <div className="pointer_block">
            <img src={pointer} alt="" />
          </div>

          <div className="start_categories">
            <div className="start_category">
              <img src={Checkmark} alt="Checkmark" />
              <h3 className="start_category_title">Preparing</h3>
            </div>

            <div className="start_category">
              <img src={Checkmark} alt="Checkmark" />
              <h3 className="start_category_title">Sourcing</h3>
            </div>

            <div className="start_category">
              <img src={Checkmark} alt="Checkmark" />
              <h3 className="start_category_title">Pre-Screening</h3>
            </div>

            <div className="start_category_hiring">
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={Checkmark} alt="Checkmark" />
                <h3 className="start_category_title">Hiring</h3>
              </div>
              <button className="start_button">Start Hiring</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouStart;
