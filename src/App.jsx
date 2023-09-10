import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
};

export default App;
