import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <>
        <div className="footer-section">
          <div className="footer-left">
            <div className="footer-logo">
              <p className="footer-logo-review">
                Book<span className="footer-logo-book">Finder</span>
              </p>
            </div>

            <p className="footer-title">Is the best place to review a book</p>
          </div>

          <div className="footer-right">
            <p className="footer-right-title">Company</p>
            <p className="footer-right-info">admin@bookfinder.com</p>
            <p className="footer-right-info">Jln. Stiabudhi No. 193</p>
            <p className="footer-right-info">Mumbai India</p>
          </div>
        </div>
        <p className="footer-copyright">
          © 2023 BookFinder. All rights reserved.
        </p>
      </>
    </footer>
  );
};

export default Footer;
