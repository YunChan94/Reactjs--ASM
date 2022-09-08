import React, { useState } from "react";
import SearchIcon from "../SearchButton/SearchIcon";
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
  //   const icon = <SearchIcon />;
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
          <SearchIcon />
        </div>
        <div className="button">
          <button onClick={resetInputHandler}>RESET</button>
          <button className="active">SEARCH</button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
