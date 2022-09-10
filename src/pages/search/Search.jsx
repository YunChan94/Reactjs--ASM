import React, { useState } from "react";
import "./Search.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchForm from "../../components/SearchForm/SearchForm";
import ResultList from "../../components/ResultList/ResultList";
const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  // Dữ liệu tìm kiếm
  const searchHandler = (key) => {
    setSearchKey(key);
  };
  return (
    <div className="app">
      <NavBar />
      <SearchForm onSearch={searchHandler} />
      <ResultList query={searchKey} id="results" />
    </div>
  );
};

export default Search;
