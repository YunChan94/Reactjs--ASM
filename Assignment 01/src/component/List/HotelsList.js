import "./HotelsList.css";
const HotelsList = (props) => {
  return (
    <div className="hotelList">
      {props.item.map((hotel) => (
        <div className="hotelItem">
          <img src={hotel.image_url} className="hotelImg"></img>
          <span className="hotelName">{hotel.name}</span>
          <span className="hotelCity">{hotel.city}</span>
          <span className="hotelPrice">Starting from ${hotel.price}</span>
          <div className="hotelRate">
            <button>{hotel.rate}</button>
            <span>{hotel.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HotelsList;
