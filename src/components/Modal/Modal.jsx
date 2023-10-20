import React, { useState } from "react";
import "./Modal.css";
import { postData, updateData } from "../../redux/dataSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ mode, isOpen, onClose, id }) => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [link, setLink] = useState("");
  const [pages, setPages] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [uniqueId, setUniqueId] = useState("");

  const notify = () => {
    toast(mode === "add" ? "Added Successfully" : "Updated Successfully!");
  };

  const notifyError = () => {
    toast.error("Title is already present. Enter a unique title!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (!isOpen) return null;

  const handleUpdate = () => {
    const updatedBookData = {
      author,
      country,
      language,
      link,
      pages,
      title,
      year,
      id: mode === "add" ? uniqueId : id,
    };

    if (mode === "add") {
      // Dispatch the updateData action to send a POST request
      dispatch(postData(updatedBookData))
        .then((response) => {
          if (response.error) {
            console.log("Book could not be added:", response.error);
            notifyError();
          } else {
            notify();
            console.log("Book Added:", response);
          }

          onClose();
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    } else {
      // Dispatch the updateData action to send a PUT request
      dispatch(updateData(updatedBookData))
        .then((response) => {
          notify();
          console.log("update done:", response);
          // need to dispatch search bu title
          onClose();
        })
        .catch((error) => {
          console.error("Update failed:", error);
        });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{mode === "add" ? "Add New Book" : "Edit Book details"}</h2>
        <input
          type="text"
          placeholder={mode === "add" ? "Add Author" : "Edit Author"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === "add" ? "Add Country" : "Edit Country"}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === "add" ? "Add Language" : "Edit Language"}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === "add" ? "Add Link" : "Edit Link"}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder={
            mode === "add" ? "Add Number of Pages" : "Edit Number of Pages"
          }
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === "add" ? "Add Title" : "Edit Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder={mode === "add" ? "Add Year" : "Edit Year"}
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        {mode === "add" && (
          <input
            type="text"
            placeholder="Add Unique Id"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
          />
        )}

        <button onClick={handleUpdate}>
          {mode === "add" ? "Add Details" : "Update Details"}
        </button>
        <button onClick={onClose}>Close</button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Modal;
