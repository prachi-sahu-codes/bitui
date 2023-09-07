import React from "react";
import "./index.css";

const LinkButton = (props) => {
  const {children, visuals, reach} = props;
  return (
    <div>
      <h1>Link Button</h1>
      <a className="link-btn" style={{...visuals}} href={{reach}}>{children}</a>
    </div>
  );
};

export default LinkButton;