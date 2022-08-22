import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <div className="listSearch">
      <h1 className="">Search</h1>
      <div className="lsItem">
        <label>Detnation</label>
        <input type="text"></input>
      </div>
      <div className="lsItem">
        <label>Check-in Date</label>
        <span>06/04/2022 to 06/24/2022</span>
      </div>
      <div className="lsOptions">
        <label>Options</label>
        <div className="lsOptionItem">
          <label>Min price per night</label>
          <input type="number"></input>
        </div>
        <div className="lsOptionItem">
          <label>Max price per night</label>
          <input type="number"></input>
        </div>
        <div className="lsOptionItem">
          <label>Adult</label>
          <input type="number"></input>
        </div>
        <div className="lsOptionItem">
          <label>Children</label>
          <input type="number"></input>
        </div>
        <div className="lsOptionItem">
          <label>Room</label>
          <input type="number"></input>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};
export default SearchPopup;
