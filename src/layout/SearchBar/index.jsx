import React, { useState } from "react";
import { Search, KeyboardArrowRight } from "@mui/icons-material";
import "./index.css";

const SearchBar = ({ setShowSearch, componentList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredList = componentList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-flex modal-search">
          <Search />
          <input
            className="modal-search-bar"
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
          <button className="btn-esc" onClick={() => setShowSearch(false)}>
            Esc
          </button>
        </div>

        {filteredList.length > 0 ? (
          <ul>
            {filteredList.map((item) => (
              <li key={item.id}>
                <a
                  href={item.hrefId}
                  className="modal-link"
                  onClick={() => setShowSearch(false)}
                >
                  <span>{item.name}</span>
                  <KeyboardArrowRight />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="modal-msg">Component not found!</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
