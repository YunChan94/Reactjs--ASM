import SearchIcon from "./SearchIcon";
import "./SearchButton.css";
import React from "react";
const SearchButton = (props) => {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <SearchIcon />
      </span>
    </button>
  );
};
export default SearchButton;
