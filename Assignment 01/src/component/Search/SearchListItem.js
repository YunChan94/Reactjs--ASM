import "./SearchListItem.css";

const SearchListItem = (props) => {
  return (
    <div>
      {props.describe.map((item) => (
        <div className="searchItem">
          <img src={item.image_url} alt="" className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{props.describe.distance}</span>
            <span className="siTag">{item.tag}</span>
            <span className="siSubtitle">{item.description}</span>
            <span className="siFeatures">{item.type}</span>
            <span className="siCancelOp">{`${
              props.describe.free_cancel ? "Free cancellation" : ""
            }`}</span>
            <span className="siCancelOpSubtitle">{`${
              item.free_cancel &&
              "You can cancel later, so lock in this great price today!"
            }`}</span>
          </div>
          <div className="siDetail">
            <div className="siRating">
              <span>{item.rate_text}</span>
              <button>{item.rate}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">${item.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchListItem;
