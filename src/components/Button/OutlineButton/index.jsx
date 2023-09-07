import React from "react";
import "./index.css";

const OutlineButton = (props) => {
  const {children, visuals} = props;
  return (
    <div>
      <button className="outline-btn" style={{...visuals}}>{children}</button>
    </div>
  );
};

export default OutlineButton;
