import React from "react";
import "./index.css";
import {TaskAlt, ErrorOutline, WarningAmber, InfoOutlined} from "@mui/icons-material";

const FilledAlert = (props) => {
  const { type ="success", message, isIcon=true, typeBg, typeIcon, messageColor } = props;

  let alertIcon;
  let alertColor;

  switch (type) {
    case "error":
      alertColor = "#ae2012";
      alertIcon = <ErrorOutline />;
      break;
    case "success":
      alertColor = "#38b000";
      alertIcon = <TaskAlt />;
      break;
    case "warning":
      alertColor = "#ee6c4d";
      alertIcon = <WarningAmber />;
      break;
    case "info":
      alertColor = "#4cc9f0";
      alertIcon = <InfoOutlined />;
      break;
    case `${type}`:
      alertColor = typeBg;
      alertIcon = typeIcon;
      break;
    default:
      alertColor = "#e9ecef";
      break;
  }

  return (
    <div style={{ backgroundColor: alertColor, color: messageColor ?? "#fff" }} className="filled-alert">
      {isIcon || typeIcon ?  typeIcon : alertIcon} <span>{message}</span>
    </div>
  );
};

export default FilledAlert;
