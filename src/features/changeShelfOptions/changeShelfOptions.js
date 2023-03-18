import React from "react";
import { useDispatch } from "react-redux";
import { updateBooks, getBooks } from "../bookList/bookListSlice";
const ChangeShelfOptions = (props) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const payload = {};
    payload.status = event.target.value;
    payload.book = props.book;
    dispatch(updateBooks(payload));
    props.changeBookStatus();
  }

    return(
        <div className="book-shelf-changer">
                            <select value={props.shelf.value} onChange={handleChange}>
                              <option value="none" disabled>
                                Move to...
                              </option>
                              <option value="currentlyReading">
                                Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                            </select>
                          </div>
    )
}

export default ChangeShelfOptions;