import React, { useState } from "react";
import "./BookCard.css";
import bookIcon from "../../assets/bookIcon.png";
import authorAvatar from "../../assets/authorAvatar.png";
import { BiSolidEditAlt } from "react-icons/bi";
import Modal from "../Modal/Modal";

const BookCard = ({ id, title, country, language, num_pages, author }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="book-card">
        <img src={bookIcon} alt="" className="book-card-img" />
        <h2 className="book-card-title">
          {title.length > 10 ? title.slice(0, 10) + "..." : title}
        </h2>
        <p>Country: {country}</p>
        <p>Language: {language}</p>
        <p>Total Pages: {num_pages}</p>
        <div className="authorSection">
          <div className="authorSection-left">
            <img src={authorAvatar} alt="" className="book-card-authorImg" />
            <p className="book-card-author">Author: {author}</p>
          </div>
          <BiSolidEditAlt size={20} className="editIcon" onClick={openModal} />
          <Modal
            mode={"edit"}
            isOpen={isModalOpen}
            onClose={closeModal}
            id={id}
          />
        </div>
      </div>
    </>
  );
};

export default BookCard;
