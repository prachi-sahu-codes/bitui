import "./index.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
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

const Documentation = () => {
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
            <li className="sidebar-link">
              <a href="#alert">Alert</a>
            </li>
            <li className="sidebar-link">
              <a href="#avatar">Avatar</a>
            </li> <li className="sidebar-link">
              <a href="#badge">Badge</a>
            </li> <li className="sidebar-link">
              <a href="#button">Button</a>
            </li> <li className="sidebar-link">
              <a href="#card">Card</a>
            </li> <li className="sidebar-link">
              <a href="#heading">Heading</a>
            </li> <li className="sidebar-link">
              <a href="#image">Image</a>
            </li>
            <li className="sidebar-link">
              <a href="#text">Text</a>
            </li>
          </ul>
        </div>

        <div className="main-content">
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
    </div>
  );
};

export default Documentation;
