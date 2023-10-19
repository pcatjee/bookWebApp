import React, { useState } from "react";
import "./Navbar.css";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../redux/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <section>
      {/* Logo   section */}
      <div className="logo-container">
        <div className="logo-section">
          <div className="logo">
            <p className="logo-review">
              Book<span className="logo-book">Finder</span>
            </p>
          </div>
          {/* search bar  */}
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Find the book you are looking for"
              onChange={handleInputChange}
            />
            <PiMagnifyingGlass
              size={20}
              color="#463C7480"
              className="search-icon"
            />
          </div>
        </div>
      </div>

      {/* menu section  */}
      <div className="menu-container">
        <ul className="menu-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Bestseller</li>
          <li className="nav-item">Category</li>
          <li className="nav-item">Community</li>
          <li className="nav-item">Blog</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
