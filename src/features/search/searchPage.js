import React from "react";
import { useNavigate } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import { useEffect } from "react";
import Book from "../book/book";
import "./searchPage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { searchBooks } from "../bookList/bookListSlice";
const Search = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(
    (state) => state.bookSlice.searchResultBooks
  );
  const navigateTo = useNavigate("");

  useEffect(() => {}, [searchResult]);
  const searchForBook = (event) => {
    setTimeout(() => {
      dispatch(searchBooks(event.target.value));
    }, 1000);
  };
  const updateStatus = () => {
    alert("DONE !");
    navigateTo("/");
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => navigateTo("/")}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={searchForBook}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        {searchResult &&
          searchResult.length &&
          searchResult.map((book) => {
            return (
              <Book
                title={book.title}
                imageUrl={book.imageLinks?.thumbnail}
                shelf={"read"}
                book={book}
                updateBookStauts={updateStatus}
              ></Book>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
