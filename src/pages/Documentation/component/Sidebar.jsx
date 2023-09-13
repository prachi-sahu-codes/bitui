import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { CloseOutlined } from "@mui/icons-material";
import "../index.css";

const Sidebar = ({ componentList, setShowMenu }) => {
  return (
    <div className="sidebar">
      <div className="flex-between">
      <Link className="logo sidebar-logo" to="/">
        <img src={logo} />
        Bit-UI.
      </Link>
      <div className="sidebar-close-icon"><CloseOutlined onClick={()=>setShowMenu(false)}/></div>
      </div>
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
  );
};

export default Sidebar;
