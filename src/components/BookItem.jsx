const BookItem = ({ book }) => {
    return (
      <li>
        <img src={book.coverImage} alt={book.title} width="100" /> <br />
        <strong>{book.title}</strong> by {book.author} <br />
        <em>Status:</em> {book.status}
      </li>
    );
  };
  
  export default BookItem;
  