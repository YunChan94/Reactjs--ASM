import "./Footer.css";

const Footer = (props) => {
  let renderValue = props.value.map((val) => val.col_values);
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          {renderValue[0].map((val) => (
            <li className="fListItem">{val}</li>
          ))}
        </ul>
        <ul className="fList">
          {renderValue[1].map((val) => (
            <li className="fListItem">{val}</li>
          ))}
        </ul>
        <ul className="fList">
          {renderValue[2].map((val) => (
            <li className="fListItem">{val}</li>
          ))}
        </ul>
        <ul className="fList">
          {renderValue[3].map((val) => (
            <li className="fListItem">{val}</li>
          ))}
        </ul>
        <ul className="fList">
          {renderValue[4].map((val) => (
            <li className="fListItem">{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
