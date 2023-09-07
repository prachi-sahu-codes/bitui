import React from "react";
import "./index.css";

const SolidButton = (props) => {
  const {children, visuals} = props;
  return (
    <div>
      <button className="primary-btn" style={{...visuals}}>{children}</button>
    </div>
  );
};

export default SolidButton;
