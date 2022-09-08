import React from "react";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchForm.css";
const SearchForm = (props) => {
  //   const icon = <SearchIcon />;
  return (
    <section className="search-container">
      <form className="search-form">
        <div className="input">
          <input placeholder="Search" id="search" />
          {/* <SearchButton /> */}
        </div>
        <div className="button">
          <button>RESET</button>
          <button>SEARCH</button>
        </div>
      </form>
    </section>
  );
};
export default SearchForm;
