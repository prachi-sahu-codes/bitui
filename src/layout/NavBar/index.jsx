import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/logo.svg";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#00b4d8" : "#333",
});

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/"><img src={logo} alt="logo"/>Bit-UI.</Link>
      <div className="all-nav-link">
        <NavLink to="/" style={getActiveStyle} className="nav-link">
          Home
        </NavLink>
        <NavLink to="/documentation" style={getActiveStyle} className="nav-link">
          Documentation
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
