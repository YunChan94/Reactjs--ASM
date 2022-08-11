import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";
const Header = () => {
  // Hàm dẫn link đến trang Search
  const gotoSearch = () => {
    window.location.replace("/search");
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDescription">
          Get rewarded for your travels = unlock instant saving of 10% or more
          with a free account
        </p>
        <button className="headerBtn">Sign in / Register</button>
      </div>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            className="headerInput"
            placeholder="Where are you going?"
            type="text"
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <input className="headerInput" type="date" />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon" />
          <span className="headerSearchText">1 adults 0 children 1 room</span>
        </div>
        <button className="SearchBtn" onClick={gotoSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
