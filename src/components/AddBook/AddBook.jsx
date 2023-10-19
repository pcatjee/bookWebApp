import React from "react";
import "./AddBook.css";
import Button from "../Button/Button";

const AddBook = () => {
  return (
    <>
      <div className="addBook-container">
        <div className="addBook-section">
          <p className="addBook-title">
            Recommended books <br />
            from you to review
          </p>
          <div>
            <Button buttonText={"Add Book"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBook;
