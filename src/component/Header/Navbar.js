import "./Navbar.css";
import NavItems from "./NavItems";
const Navbar = (props) => {
  // Dữ liệu navbar
  const navBar = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  return (
    <div className="navbar">
      <div className="navContainer">
        <h3>Booking Website</h3>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
        <NavItems navItem={navBar} />
      </div>
    </div>
  );
};
export default Navbar;
