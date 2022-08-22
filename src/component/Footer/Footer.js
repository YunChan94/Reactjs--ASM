import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import "./Footer.css";

const Footer = () => {
  // Dữ liệu hiển thị footer
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
    <div className="footer">
      <div className="fLists">
        {footer.map((col) => (
          <ul className="fList" key={col.col_number}>
            {col.col_values.map((val) => (
              <li className="fListItem">{val}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Footer;
