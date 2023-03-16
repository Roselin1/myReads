import ChangeShelfOptions from "../changeShelfOptions/changeShelfOptions";
import "./book.css";

const Book = (props) => {
  const changeBookStatus = (status, book) => {
    props.updateBookStauts(status, book);
  };

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${props.imageUrl})`,
            }}
          ></div>
          <ChangeShelfOptions
            book={props.book}
            shelf={props.shelf}
            changeBookStatus={changeBookStatus}
          ></ChangeShelfOptions>
        </div>
        <div className="book-title"> {props.title} </div>
        <div className="book-authors">{props.author}</div>
      </div>
    </div>
  );
};

export default Book;
