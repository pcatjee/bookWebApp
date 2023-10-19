import React from "react";
import "./BookCard.css";
import bookIcon from "../../assets/bookIcon.png";
import authorAvatar from "../../assets/authorAvatar.png";

const BookCard = ({ title, country, language, num_pages, author }) => {
  return (
    <>
      <div className="book-card">
        <img src={bookIcon} alt="" className="book-card-img" />
        <h2 className="book-card-title">
          {title.length > 10 ? title.slice(0, 10) + "..." : title}
        </h2>
        <p>Country: {country}:</p>
        <p>Language: {language}:</p>
        <p>Total Pages: {num_pages}:</p>
        <div className="authorSection">
          <img src={authorAvatar} alt="" className="book-card-authorImg" />
          <p className="book-card-author">Author: {author}</p>
        </div>
      </div>
    </>
  );
};

export default BookCard;
