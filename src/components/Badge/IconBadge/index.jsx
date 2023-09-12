import React from "react";
import "./index.css";

const IconBadge = (props) => {
  const { children, badgeColor, badgeText, dimension = "30", visuals } = props;
  return (
    <div className="icon-badge">
      <div
        className="icon-badge-content"
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
          fontSize: `${dimension}px`,
          
        }}
      >
        {children}{" "}
        <div
          className="icon-badge-text"
          style={{ backgroundColor: badgeColor, ...visuals }}
        >
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default IconBadge; 
