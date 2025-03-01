// components/MyBookCard.jsx
import React from "react";

const MyBookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} className="book-cover" />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}/5</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p>{book.description}</p>
        <button className="edit-btn">✏️ Edit</button>
        <button className="delete-btn">🗑️ Delete</button>
      </div>
    </div>
  );
};

export default MyBookCard;
