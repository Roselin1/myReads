
import React from "react";
import BookShelf from "../bookShelf/bookShelf";
import { useNavigate } from 'react-router-dom';
const MainPage = () => {

    const navigateTo = useNavigate();

    return (<div>
        <BookShelf></BookShelf>
        <div className="open-search">
            <a onClick={() => navigateTo("/search")}>Add a book</a>
        </div>

    </div>)

}

export default MainPage;