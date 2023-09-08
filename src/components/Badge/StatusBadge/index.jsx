import React from 'react';
import "./index.css";

const StatusBadge = (props) => {
  const { children, badgeColor } = props;
  return (
    <div className='status-badge'>
      <div style={{backgroundColor:badgeColor}} className='status-badge-child'>{children}</div>
      </div>
  )
};

export default StatusBadge;
