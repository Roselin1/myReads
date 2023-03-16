import React from "react";
import { useNavigate } from "react-router-dom";
import * as BooksAPI from "../../BooksAPI";
import { useState, useEffect } from "react";
import Book from "../book/book";
import "./searchPage.css"
const Search = () => {
  const navigateTo = useNavigate("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    console.log("Re-render");
  }, [searchResult]);
  const searchForBook = (event) => {
    setTimeout(() => {
      BooksAPI.search(event.target.value, 100)
        .then((res) => {
          console.log(res);
          setSearchResult(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000);
  };
  const updateStatus = (status, book) => {
    BooksAPI.update(book, status)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
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
                imageUrl={book.imageLinks.thumbnail}
                // author={book.authors[0]}
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
