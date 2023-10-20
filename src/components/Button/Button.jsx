import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick }) => {
  return (
    <>
      <div className="button" onClick={onClick}>
        <p className="button-text">{buttonText}</p>
      </div>
    </>
  );
};

export default Button;
