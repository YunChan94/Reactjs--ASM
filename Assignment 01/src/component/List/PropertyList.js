import "./PropertyList.css";

const PropertyList = (props) => {
  return (
    <div className="pList">
      {props.propertyItem.map((prop) => (
        <div className="pListItem">
          <img src={prop.image} className="pImg"></img>
          <div className="pTitle">
            <h1>{prop.name}</h1>
            <h2>{prop.count}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PropertyList;
