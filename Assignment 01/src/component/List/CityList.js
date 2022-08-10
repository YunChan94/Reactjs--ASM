import "./CityList.css";

const CityList = (props) => {
  return (
    <div className="cityList">
      {props.item.map((city) => (
        <div className="cityListItem">
          <img src={city.image} className="cityImg"></img>
          <div className="cityTitle">
            <h2>{city.name}</h2>
            <h2>{city.subText}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CityList;
