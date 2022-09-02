import SearchIcon from "./SearchIcon";
import "./SearchButton.css";
import React from "react";
const SearchButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <SearchIcon />
      </span>
    </button>
  );
};
export default SearchButton;
