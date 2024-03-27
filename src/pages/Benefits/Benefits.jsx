import React, { useRef, useState } from "react";
import BenefitAgriculture from "../../components/Benefits/BenefitAgriculture";
import Agriculture from "../../images/Agriculture.svg";
import HighQuality from "../../images/HighQuality.svg";
import Match from "../../images/Match.svg";
import dev from "../../images/dev.mp4";
import "./Benefits.css";

function Benefits() {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const handlePlayButtonClick = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };

  const handleVideoEnded = () => {
    setShowPlayButton(true);
    videoRef.current.currentTime = 0;
  };

  return (
    <div>
      <div className="container">
        <h2 className="benefits_title">What You Get</h2>

        <div className="benefit_video_wrap">
          <video
            className="benefit_video"
            controls
            ref={videoRef}
            onEnded={handleVideoEnded}
          >
            <source src={dev} type="video/mp4" />
          </video>
          {showPlayButton && (
            <button
              className="custom_play_button"
              onClick={handlePlayButtonClick}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_2060_8023)">
                  <circle
                    cx="40"
                    cy="40"
                    r="40"
                    fill="white"
                    fill-opacity="0.4"
                  />
                </g>
                <path
                  d="M64.4004 40.0001L27.8004 61.1311V18.8691L64.4004 40.0001Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_b_2060_8023"
                    x="-28"
                    y="-28"
                    width="136"
                    height="136"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="14" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2060_8023"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2060_8023"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          )}
        </div>
        <div className="benefits_info_wrap">
          <div className="benefits_info">
            <BenefitAgriculture
              img={Agriculture}
              brake={"benefits_span_width"}
              content={
                <div>
                  <h3 className="benefits_info_title">Efficient Recruiting</h3>
                  <p className="benefits_info_text">
                    Connect with pre-qualified talents <br />
                    <span className="benefits_span">
                      - save valuable time and <br /> resources.
                    </span>
                  </p>
                </div>
              }
            />

            <BenefitAgriculture
              img={Match}
              content={
                <div>
                  <h3 className="benefits_info_title">Pre-qualified Talents</h3>
                  <p className="benefits_info_text">
                    <span className="benefits_span">
                      Get high-quality candidates <br />
                    </span>
                    from the very start.
                  </p>
                </div>
              }
            />

            <BenefitAgriculture
              img={HighQuality}
              content={
                <div>
                  <h3 className="benefits_info_title">Your Perfect Shortcut</h3>
                  <p className="benefits_info_text">
                    Focus your recruiting effort -"
                    <span className="benefits_span">
                      start interviewing straight away.
                    </span>
                  </p>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
