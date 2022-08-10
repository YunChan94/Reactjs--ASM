import "./Home.css";
import Navbar from "../../component/Navbar";
import NavItems from "../../component/NavItems";
import Header from "../../component/Header";
import CityList from "../../component/List/CityList";
import PropertyList from "../../component/List/PropertyList";
import HotelsList from "../../component/List/HotelsList";
const Home = () => {
  const navBar = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];
  const city = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  const property = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  const hotels = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <NavItems item={navBar} />
      <Header />
      <div className="homeContainer">
        <CityList item={city} />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList item={property} />
        <h1 className="homeTitle">Home guests love</h1>
        <HotelsList item={hotels} />
      </div>
    </div>
  );
};

export default Home;
