import "./Header.css";
const Header = () => {
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
    </div>
  );
};
export default Header;
