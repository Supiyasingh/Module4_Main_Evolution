import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebaseConfig";
import BookList from "./BookList";

const BookContainer = () => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    const booksRef = ref(db, "books");

    onValue(booksRef, (snapshot) => {
      if (snapshot.exists()) {
        setBooks(snapshot.val());
      } else {
        setBooks({});
      }
    });
  }, []);

  return (
    <div>
      <h2>📚 Book Library</h2>
      <BookList books={books} />
    </div>
  );
};

export default BookContainer;
