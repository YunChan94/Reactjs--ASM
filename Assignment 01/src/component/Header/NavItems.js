import "./NavItems.css";
const NavItems = (props) => {
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="navList">
          {props.navItem.map((navItem) => (
            <div className={`navListItem ${navItem.active ? "active" : ""}`}>
              <span className={"fa " + navItem.icon}></span>
              <span>{navItem.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavItems;
