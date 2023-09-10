import { Link } from "react-router-dom";
import "./index.css";
import hero from "../../assets/hero.svg";
import NavBar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const Home = () => {
  return (
    <div>
        <NavBar />
        <div className="home-main">
      <div className="hero-content">
        <h1 className="hero-text"> Your Ultimate Component Library which bring your <span>idea to reality.</span></h1>
        <p className="hero-para">Ready to explore? Unlock Boundless Creativity now.</p>
        <Link to="/documentation" className="home-btn">
          Get Started
        </Link>
      </div>
      <img src={hero} className="hero-image" /></div>
      <Footer/>
    </div>
  );
};

export default Home;
