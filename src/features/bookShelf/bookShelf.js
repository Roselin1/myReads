import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";
import BookList from "../bookList/bookList";

const BookShelf = () => {
  const [bookShelf, setBookShelf] = useState([{
    name: "currently Reading",
    value: "currentlyReading"
  },
  {
    name: "want To Read",
    value:"wantToRead"
  },
  {
    name: "read",
    value: "read"
  }

  ]);

  const bookShelfView = bookShelf.map((shelf, index) => {
    return <BookList shelf={shelf}> </BookList>;
  });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {bookShelfView}
    </div>
  );
};

export default BookShelf;
