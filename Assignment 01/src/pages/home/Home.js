import "./Home.css";
import Navbar from "../../component/Header/Navbar";
import NavItems from "../../component/Header/NavItems";
import Header from "../../component/Header/Header";
import CityList from "../../component/List/CityList";
import PropertyList from "../../component/List/PropertyList";
import HotelsList from "../../component/List/HotelsList";
import RegisterForm from "../../component/Form/RegisterForm";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  // Dữ liệu hiển thị các thành phố
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

  // Dữ liệu Hiển thị các loại khách sạn
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

  // Dữ liệu hiển thị các khách sạn
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
      <Header />
      <div className="homeContainer">
        {/* Hiển thị các thành phố */}
        <CityList cityItem={city} />
        {/* Hiển thị các loại khách sạn */}
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList propertyItem={property} />

        {/* Hiển thị các khách sạn */}
        <h1 className="homeTitle">Home guests love</h1>
        <HotelsList hotelItem={hotels} />
      </div>

      {/* Form đăng ký */}
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Home;
