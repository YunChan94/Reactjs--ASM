import React from "react";
import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
const Search = () => {
  return (
    <div className="app">
      <NavBar />
      <SearchForm />
    </div>
  );
};

export default Search;
