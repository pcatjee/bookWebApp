import React, { useState } from "react";
import "./AddBook.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const AddBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="addBook-container">
        <div className="addBook-section">
          <p className="addBook-title">
            Recommended books <br />
            from you to review
          </p>
          <div>
            <Button buttonText={"Add Book"} onClick={openModal} />
          </div>
        </div>
        <Modal mode={"add"} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
};

export default AddBook;
