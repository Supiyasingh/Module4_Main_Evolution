// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBooks } from "../redux/actions/booksActions";

// const BookList = () => {
//   const dispatch = useDispatch();
//   const { books, loading, error } = useSelector((state) => state.books);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   if (loading) return <p>Loading books...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Books List</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <strong>{book.title}</strong> by {book.author}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BookList;
import React from "react";

const BookList = ({ books }) => {
  if (!books || Object.keys(books).length === 0) {
    return <p>⚠️ No books available.</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
      {Object.keys(books).map((bookId) => {
        const book = books[bookId];
        return (
          <div key={bookId} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
            <img src={book.coverImage} alt={book.title} width={100} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;

