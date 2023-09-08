import React from "react";
import "./index.css";

const ImageAvatar = (props) => {
  const { avatarSource, avatarAlt, visuals, dimension } = props;
  return (
    <div style={{ width: dimension, height: dimension }}>
      <img
        className="image-avatar"
        src={avatarSource}
        alt={avatarAlt}
        width="100%"
        height="100%"
        style={{ ...visuals }}
      />
    </div>
  );
};

export default ImageAvatar;