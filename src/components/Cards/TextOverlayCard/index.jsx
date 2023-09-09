import React from "react";
import "./index.css";

const TextOverlayCard = (props) => {
  const { children, imageSource, imageVisuals, imageAlt, visuals, overlayVisuals } = props;
  return (
    <div style={{ ...visuals }} className="overlay-card">
      <img
        src={imageSource}
        className="overlay-image"
        style={{...imageVisuals}}
        alt={imageAlt ?? "card image"}
      />
      <div className="overlayContent" style={{ ...overlayVisuals }}>
        {children}
      </div>
    </div>
  );
};

export default TextOverlayCard;
