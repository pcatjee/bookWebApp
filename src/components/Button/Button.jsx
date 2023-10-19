import React from "react";
import "./Button.css";

const Button = ({ buttonText }) => {
  return (
    <>
      <div className="button">
        <p className="button-text">{buttonText}</p>
      </div>
    </>
  );
};

export default Button;
