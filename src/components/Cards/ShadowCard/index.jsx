import React from 'react';
import "./index.css";

const ShadowCard = (props) => {
  const {children, shadowType, visuals} = props;
  return (
    <div style={{...visuals}} className={`shadow-card ${shadowType === "inner" ? "inner-shadow" : "outer-shadow"}`}>
      {children}
    </div>
  )
};

export default ShadowCard;
