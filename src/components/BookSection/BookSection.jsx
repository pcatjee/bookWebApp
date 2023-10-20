import React, { useEffect, useState } from "react";
import "./BookSection.css";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { fetchData } from "../../redux/dataSlice";

import { PiMagnifyingGlass } from "react-icons/pi";
import { setSearchTerm } from "../../redux/searchSlice";

const BookSection = () => {
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (status === "succeeded") {
      console.log("data ->", data.data);
    }
  }, [data, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const filteredData =
    data && data.data
      ? data.data.filter((item) => {
          const itemTitle = item.title.toLowerCase();
          const searchTermLower = searchTerm.toLowerCase();
          return itemTitle.includes(searchTermLower);
        })
      : [];

  if (filteredData.length === 0) {
    return <div className="no-data">No data available yet.</div>;
  }
  const currentData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="book-section">
      <div className="book-section-titleSection">
        <h2 className="book-section-title">Popular Books</h2>
        {/* search bar  */}
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Filter the book you are looking for"
            onChange={handleInputChange}
          />
          <PiMagnifyingGlass
            size={20}
            color="#463C7480"
            className="search-icon"
          />
        </div>
      </div>
      <div className="book-flex">
        {currentData.length > 0 ? (
          currentData.map((item) => (
            <BookCard
              key={item.id}
              id={item.id}
              title={item.title}
              country={item.country}
              language={item.language}
              num_pages={item.pages}
              author={item.author}
            />
          ))
        ) : (
          <div>No matching results found.</div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Number Links */}
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={
              currentPage === index + 1
                ? "pagination-active"
                : "pagination-normal"
            }
          >
            {index + 1}
          </button>
        ))}

        <button
          className="pagination-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default BookSection;
