import React from 'react';
import "./index.css";

const TextOnlyCard = (props) => {
  const {children, bgColor, visuals} = props;
  return (
    <div className='text-only-card' style={{backgroundColor: bgColor, ...visuals}}>
      {children}
    </div>
  )
};

export default TextOnlyCard;
