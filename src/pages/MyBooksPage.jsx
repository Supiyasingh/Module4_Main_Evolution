// pages/MyBooksPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import MyBookCard from "../components/BookCard";

const MyBooksPage = () => {
  const { books } = useSelector((state) => state.books);
  const { user } = useSelector((state) => state.auth);

  // Filter books added by the logged-in user
  const userBooks = books.filter((book) => book.addedBy === user?.email);

  return (
    <div>
      <h2>My Books</h2>
      {userBooks.length === 0 ? (
        <p>You haven't added any books yet.</p>
      ) : (
        userBooks.map((book) => <MyBookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default MyBooksPage;
