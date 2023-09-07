import { NavLink, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Documentation from "./pages/Documentation";

const getActiveStyle = ({ isActive }) => ({
  color: isActive ? "#00b4d8" : "#333",
  padding: "1rem",
  fontSize: "1.1rem",
  fontWeight: "bold"
});

const App = () =>{
  return <div>
    <NavLink to="/" style={getActiveStyle}>Home</NavLink>
    <NavLink to="/documentation" style={getActiveStyle}>Documentation</NavLink>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/documentation" element={<Documentation/>}/>
    </Routes>
  </div>
}

export default App;

