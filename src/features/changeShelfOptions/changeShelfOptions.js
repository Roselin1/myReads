import React from "react";
const ChangeShelfOptions = (props) => {

  const handleChange = (event) => {
    const value = event.target.value;
    props.changeBookStatus(value, props.book);
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
                              <option value="none">None</option>
                            </select>
                          </div>
    )
}

export default ChangeShelfOptions;