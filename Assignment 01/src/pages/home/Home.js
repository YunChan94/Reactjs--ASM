import "./Home.css";
import Navbar from "../../component/Navbar";
import NavItems from "../../component/NavItems";
import Header from "../../component/Header";
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
  return (
    <div>
      <Navbar />
      <NavItems item={navBar} />
      <Header />
    </div>
  );
};

export default Home;
