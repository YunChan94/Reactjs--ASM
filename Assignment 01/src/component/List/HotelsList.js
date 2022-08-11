import "./HotelsList.css";
const HotelsList = (props) => {
  // Hàm dẫn link đến trang detail
  const gotoDetail = () => {
    window.location.replace("/detail");
  };
  return (
    <div className="hotelList">
      {props.hotelItem.map((hotel) => (
        <div className="hotelItem">
          <img src={hotel.image_url} className="hotelImg"></img>
          <span className="hotelName" onClick={gotoDetail}>
            {hotel.name}
          </span>
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
