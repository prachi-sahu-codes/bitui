import React from "react";
import "./index.css";
import { CloseOutlined } from "@mui/icons-material";

const DismissCard = (props) => {
  const { children, dismissIcon, dismissBgColor = "#0096c7", dismissColor, visuals } = props;
  return (
    <div className="card-dismiss" style={{ ...visuals }}>
      <div
        className="card-dismiss-label"
        style={{ backgroundColor: dismissBgColor, color: dismissColor }}
      >
        {dismissIcon ? dismissIcon : <CloseOutlined/>}
      </div>
      {children}
    </div>
  );
};

export default DismissCard;
