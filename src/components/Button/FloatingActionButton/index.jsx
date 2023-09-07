import React from "react";
import "./index.css";

const FloatingActionButton = (props) =>{
    const {children, visuals, title} = props;
    return <div>
      <button className="floating-btn" style={{...visuals}} title={title}>{children}</button>
    </div>
}

export default FloatingActionButton;