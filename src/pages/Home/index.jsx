import { Link } from "react-router-dom";
import "./index.css";
import hero from "../../assets/hero.svg";
import NavBar from "../../layout/NavBar";
import Footer from "../../layout/Footer";
import {Assistant} from '@mui/icons-material';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home-main">
        <div className="hero-content">
          <h1 className="hero-text">
            Your Ultimate Component Library which bring your
            <span>idea to reality.</span>
          </h1>
          <p className="hero-para">
            Ready to explore? Unlock Boundless Creativity now.
          </p>
          <Link to="/documentation" className="home-btn">
            Get Started
          </Link>
        </div>
        <img src={hero} className="hero-image" />
      </div>
      <section>
        <ul className="feature-section">
          <li className="feature-flex"><span><Assistant/></span>Sleek and Intuitive User Interface</li>
          <li className="feature-flex"><span><Assistant/></span>Effortless Navigation Experience</li>
          <li className="feature-flex"><span><Assistant/></span>Enhance Your Productivity Easily</li>
          <li className="feature-flex"><span><Assistant/></span>Harness Ready-Made Components</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
