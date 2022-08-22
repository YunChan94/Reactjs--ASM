import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  // Hàm dẫn link đến trang Search
  const gotoSearch = () => {
    window.location.replace("/search");
  };

  // Ẩn hiện calendar khi click vào ô chọn ngày
  const [openDate, setOpenDate] = useState(false);

  const openCalendar = () => {
    setOpenDate(!openDate);
  };

  // State sử dụng trong daterange
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

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
            className="color: lightgray;
            cursor: pointer;"
            placeholder="Where are you going?"
            type="text"
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
          <span className="headerSearchText" onClick={openCalendar}>
            {`${format(date[0].startDate, "MM/dd/yyy")} 
            to ${format(date[0].endDate, "MM/dd/yyy")}`}{" "}
          </span>
          {/* Khi giá trị của openDate=true thì hiển thị dateRange */}
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />
          )}
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
