import React, { Fragment, useState } from "react";
import "./NavBar.css";

import SearchButton from "../SearchButton/SearchButton";
const NavBar = () => {
  const [yScroll, setYScroll] = useState(null);

  //Đổi màu cho thanh navbar khi user cuôn trang hơn 100px
  const scrollHandler = () => {
    // Cập nhập giá trị scrollY vào state;
    setYScroll(window.scrollY);
  };
  // Bắt sự kiện scroll của window
  window.onscroll = scrollHandler;

  let headerColorClasses;
  // Khi scroll dưới 100px thì navbar màu đen, ngược lại thì không màu
  if (yScroll < 100) {
    headerColorClasses = "header unscroll";
  } else {
    headerColorClasses = "header scroll";
  }

  // Dẫn link đến trang Search
  const gotoSearch = () => {
    window.location.replace("/search");
    console.log("gotoSearch");
  };
  return (
    <Fragment>
      <header className={headerColorClasses}>
        <h3>Movie App</h3>
        <SearchButton onClick={gotoSearch} />
      </header>
    </Fragment>
  );
};
export default NavBar;
