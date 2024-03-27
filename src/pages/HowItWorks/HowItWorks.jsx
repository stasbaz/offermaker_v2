import React from "react";
import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import steps from "../../images/steps.png";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <div className="steps_section">
      <div className="start_container">
        <h2 className="steps_title">How It Works</h2>
        <div className="steps_wrap">
          <div className="step_block">
            <h3 className="step_block_title_1">Fill out contact form</h3>

            <p className="step_block_text">
              We start our cooperation with safeguarding the confidentiality of
              your product and business process. No details about your project
              until we have an NDA in place.
            </p>
            <img className="step_background" src={one} alt="" />
          </div>

          <div className="step_block">
            <h3 className="step_block_title">
              Share your job <br />
              description
            </h3>
            <p className="step_block_text">
              We analyze your tasks, identify the project requirements and your
              business needs in detail. Afterwards, our team select an effective
              solution right fit you and your team.
            </p>
            <img className="step_background" src={two} alt="" />
          </div>

          <div className="step_block">
            <h3 className="step_block_title">
              Get exclusive <br />
              candidates list
            </h3>
            <p className="step_block_text">
              It’s time to choose the best suitable engagement model for your
              project and start the working process. As a beneficial
              opportunity, you can review our developers’ CVs to define the best
              choice.
            </p>
            <img className="step_background" src={three} alt="" />
          </div>
        </div>
        <img className="steps_schema" src={steps} alt="" />
      </div>
    </div>
  );
}

export default HowItWorks;
