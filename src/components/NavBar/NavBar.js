import React, { Fragment, useState } from "react";
import "./NavBar.css";

import SearchButton from "../SearchButton/SearchButton";
const NavBar = () => {
  const [yScroll, setYScroll] = useState(null);

  let headerColorClasses;
  //Đổi màu cho thanh navbar khi user cuôn trang hơn 100px
  const scrollHandler = () => {
    window.scrollBy(0, 0);
    setYScroll(window.scrollY);
    console.log(yScroll);
    if (window.scrollY < 100) {
      headerColorClasses = "header-scroll";
    } else {
      headerColorClasses = "header";
    }
    console.log(yScroll);
    console.log(headerColorClasses);
  };

  // Dẫn link đến trang Search
  const gotoSearch = () => {
    window.location.replace("/search");
  };
  return (
    <Fragment>
      <header className="header" onScroll={scrollHandler}>
        <h3>Movie App</h3>
        <SearchButton onClick={gotoSearch} />
      </header>
      <div className="header-image">
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202106/1704/JzL1NLQvok7Pghe9W5PP2XNV.png"
          alt=""
        ></img>
      </div>
    </Fragment>
  );
};
export default NavBar;
