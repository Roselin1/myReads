import "./App.css";
import { useState } from "react";
import MainPage from "./features/mainPage/mainPage";
import Search from "./features/search/searchPage";
import {
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  

  return (
    <div role='maindev' className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
