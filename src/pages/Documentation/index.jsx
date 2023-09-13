import { Link, NavLink } from "react-router-dom";
import { Search, ArrowDropUp } from "@mui/icons-material";
import logo from "../../assets/logo.svg";
import "./index.css";
import {
  AlertSection,
  AvatarSection,
  BadgeSection,
  ButtonSection,
  CardSection,
  HeadingSection,
  ImageSection,
  TextSection,
} from "../../DocSection";
import SearchBar from "../../layout/SearchBar";
import {  useState } from "react";
import Footer from "../../layout/Footer";

const componentList = [
  { id: 1, hrefId: "#alert", name: "Alert" },
  { id: 2, hrefId: "#avatar", name: "Avatar" },
  { id: 3, hrefId: "#badge", name: "Badge" },
  { id: 4, hrefId: "#button", name: "Button" },
  { id: 5, hrefId: "#card", name: "Card" },
  { id: 6, hrefId: "#heading", name: "Heading" },
  { id: 7, hrefId: "#image", name: "Image" },
  { id: 8, hrefId: "#text", name: "Text" },
];

const Documentation = () => {
  const [showSearch, setShowSearch] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="doc-content">
        <div className="sidebar">
          <Link className="logo" to="/">
            <img src={logo} />
            Bit-UI.
          </Link>
          <p className="sidebar-link-head">Components</p>
          <ul className="sidebar-all-links">
            {componentList.map((item) => (
              <li key={item.id} className="sidebar-link">
                <NavLink
                  to={item.hrefId}
                  onClick={() => scrollToSection(item.hrefId)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="main-content">
          <div className="doc-nav-bar">
            <div
              className="search-bar"
              onClick={() => setShowSearch((prev) => !prev)}
            >
              <Search />
              <p className="search-msg">Search...</p>
            </div>
            <Link
          className="github-links"
          to="https://github.com/prachi-sahu-codes/bitui"
          target="_blank"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </Link>

          </div>
          <AlertSection />
          <AvatarSection />
          <BadgeSection />
          <ButtonSection />
          <CardSection />
          <HeadingSection />
          <ImageSection />
          <TextSection />
        </div>
      </div>
      {showSearch && (
        <SearchBar
          setShowSearch={setShowSearch}
          componentList={componentList}
        />
      )}
      <Footer/>
    </div>
  );
};

export default Documentation;
