import React, { useState } from "react";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchForm.css";
const SearchForm = (props) => {
  const [searchKey, setSearchKey] = useState("");

  // Bắt sự kiện của input
  const inputChangeHandler = (e) => {
    setSearchKey(e.target.value);
  };

  //Lấy search key người dùng nhập
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSearch(searchKey);
  };

  //Reset khung input
  const resetInputHandler = () => {
    setSearchKey("");
  };

  return (
    <section className="search-container" onSubmit={submitHandler}>
      <form className="search-form">
        <div className="input">
          <input
            type="text"
            id="search"
            placeholder="Search"
            onChange={inputChangeHandler}
            value={searchKey}
          />
          <SearchButton className="search-icon" />
        </div>
        <div className="search-button">
          <button onClick={resetInputHandler}>RESET</button>
          <button className="active">SEARCH</button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
