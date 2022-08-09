import "./Navbar.css";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <h3>Booking Website</h3>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">login</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
