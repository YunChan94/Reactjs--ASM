import "./Search.css";
import Navbar from "../../component/Header/Navbar";
import NavItems from "../../component/Header/NavItems";
import Footer from "../../component/Footer/Footer";
import SearchPopup from "../../component/Search/SearchPopup";
import SearchList from "../../component/Search/SearchList";

const Search = () => {
  // Dữ liệu footer
  const footer = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="searchContainer">
        <div className="searchWrapper">
          {/* Component để render phần popup nằm bên trái của Page */}
          <SearchPopup />

          {/* Component để render các kết quả của việc tìm kiếm nằm ở bên phải của Page */}
          <SearchList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
