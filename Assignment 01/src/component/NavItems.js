import "./NavItems.css";
import Header from "./Header";
const NavItems = (props) => {
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="navList">
          {props.item.map((navItem) => (
            <div className={`navListItem ${navItem.active ? "active" : ""}`}>
              <span className={"fa " + navItem.icon}></span>
              <span>{navItem.type}</span>
            </div>
          ))}
        </div>
        {/* <Header /> */}
      </div>
    </div>
  );
};
export default NavItems;
