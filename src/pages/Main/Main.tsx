import React from "react";
import "../StylePages.css";
import Header from "../../components/Header/Header";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="main_gradient_top"></div>
      <div className="main_gradient_bottom"></div>
      <div className="container">
        <Header />
        <h1 className="main_title">
          You get <br />
          <span className="main_title_span">the most relevant</span> tech
          talents <br />
          in one place
        </h1>

        <p className="main_subtitile">
          Find the best candidates and turn them into employees. <br />
          Save your recruitment efforts with our pre-vetted candidates.
        </p>
        <div className="main_button_wrapper">
          <button className="main_button">Get Now</button>
        </div>
      </div>
    </div>
  );
}
