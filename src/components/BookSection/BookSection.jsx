import React, { useEffect } from "react";
import "./BookSection.css";
import { useSelector, useDispatch } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { fetchData } from "../../redux/dataSlice";

const BookSection = () => {
  const data = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const error = useSelector((state) => state.data.error);
  const searchTerm = useSelector((state) => state.search);
  const dispatch = useDispatch();

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

  return (
    <section className="book-section">
      <div className="book-section-titleSection">
        <h2 className="book-section-title">Available Books</h2>
        <p className="book-section-viewAll">View All</p>
      </div>
      <div className="book-flex">
        {data && data.data ? (
          data.data.map((item) => (
            <BookCard
              key={item.id}
              title={item.title}
              country={item.country}
              language={item.language}
              num_pages={item.pages}
              author={item.author}
            />
          ))
        ) : (
          <div>No data available yet.</div>
        )}
      </div>
    </section>
  );
};

export default BookSection;
