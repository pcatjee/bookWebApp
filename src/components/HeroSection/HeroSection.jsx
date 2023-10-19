import React from "react";
import "./HeroSection.css";
import Button from "../Button/Button";
import bookIcon from "../../assets/hero-section-book.png";
import bgVector from "../../assets/bg-vector.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-section">
          <div>
            <p className="hero-text">
              Book is a <br />
              window to the world
            </p>
            <p className="hero-infoText">
              wake up your dream by reading a book every day
            </p>
            <div className="hero-button">
              <Button buttonText={"Read Now"} />
            </div>
          </div>
          <div className="image-container">
            <img src={bgVector} alt="" className="hero-bgVector" />
            <img src={bookIcon} alt="" className="hero-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
