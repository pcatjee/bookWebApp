import React, { useState } from "react";
import "./SearchResult.css";
import BookCard from "../BookCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { setSortingOrder } from "../../redux/sortSlice";

const SearchResult = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.find.data);
  const sortingOrder = useSelector((state) => state.sort);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = searchResults?.data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(searchResults?.data?.length / itemsPerPage);

  const handleSortButtonClick = (order) => {
    dispatch(setSortingOrder(order));
  };

  return (
    <section className="searchResult-section">
      <div className="searchResult-container">
        <div className="searchResult-titleSection">
          <h2 className="searchResult-title">Search Result</h2>
          <div className="searchResult-sortContainer">
            <p className="searchResult-sorting">Sort</p>
            <button
              className={
                sortingOrder === "ASC" ? "sort-btn-active" : "sort-btn"
              }
              onClick={() => handleSortButtonClick("ASC")}
            >
              Ascending
            </button>
            <button
              className={
                sortingOrder === "DESC" ? "sort-btn-active" : "sort-btn"
              }
              onClick={() => handleSortButtonClick("DESC")}
            >
              Descending
            </button>
          </div>
        </div>
      </div>
      <div className="book-flex">
        {currentData?.length > 0 ? (
          currentData?.map((item) => (
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

export default SearchResult;
