import React from "react";
import "./index.css";

const SolidButton = (props) => {
  const {children, visuals} = props;
  return (
    <div>
      <h1>Solid Button</h1>
      <button className="primary-btn" style={{...visuals}}>{children}</button>
    </div>
  );
};

export default SolidButton;
