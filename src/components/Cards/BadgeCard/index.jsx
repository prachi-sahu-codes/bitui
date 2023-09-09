import React from "react";
import "./index.css";

const BadgeCard = (props) => {
  const { children, badgeIcon, badgeMessage="Hot", badgeColor="#0096c7", visuals } = props;
  return (
    <div className="card-badge" style={{ ...visuals}}>
      <div className="card-badge-label" style={{ backgroundColor: badgeColor }} >
        {badgeIcon && (
          <span>{badgeIcon}</span>
        )}
        {badgeMessage}
      </div>
      {children}
    </div>
  );
};

export default BadgeCard;
