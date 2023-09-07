import React from "react";
import "./index.css";


const IconButton = (props) =>{
    const {icon, children, visuals} = props;
    return <div>
            <button className="icon-btn" style={{...visuals}}><span className="icon-logo">{icon}</span>{children}</button>
          </div>
}

export default IconButton;
