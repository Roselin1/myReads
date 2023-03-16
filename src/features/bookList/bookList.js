import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";
import Book from "../book/book";
import "./bookList.css";

const BookList = (props) => {
  const [bookList, updateBooks] = useState({
    books: [],
  });

  useEffect(() => {
    getAllBooks();
  }, [bookList.books]);

  const getAllBooks = () => {
    BooksAPI.getAll()
      .then((res) => {
        updateBooks({ books: res });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStatus = (status, book) => {
    BooksAPI.update(book, status)
      .then((res) => {
        console.log(res);
        getAllBooks();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const bookShelfs = bookList.books.filter(
    (book) => book.shelf === props.shelf.value
  );
  const bookListView = bookShelfs.map((book, index) => {
    return (
      <Book
        title={book.title}
        imageUrl={book.imageLinks.thumbnail}
        author={book.authors[0]}
        shelf={props.shelf}
        book={book}
        updateBookStauts={updateStatus}
      ></Book>
    );
  });
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li> {bookListView} </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
