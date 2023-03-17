import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";
import Book from "../book/book";
import "./bookList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooks } from "./bookListSlice";

const BookList = (props) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookSlice.books);

  useEffect(() => {
    dispatch(getBooks())
  }, []);
  const bookShelfs = bookList.filter(
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
        updateBookStauts = {() => dispatch(getBooks())}
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
