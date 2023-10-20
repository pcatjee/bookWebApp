import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/searchSlice";
import { fetchBooksByTitle } from "../../redux/findSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const searchResults = useSelector((state) => state.find.data);
  const sortingOrder = useSelector((state) => state.sort);

  const handleSearch = () => {
    dispatch(fetchBooksByTitle({ dispatch: dispatch, title, sortingOrder }));
  };

  useEffect(() => {
    if (searchResults?.data?.length > 0) {
      handleSearch();
    }
  }, [sortingOrder]);

  return (
    <nav>
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <PiMagnifyingGlass
              size={20}
              color="#463C7480"
              className="search-icon"
              onClick={handleSearch}
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
    </nav>
  );
};

export default Navbar;
