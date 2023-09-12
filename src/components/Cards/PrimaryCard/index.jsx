import React from 'react';
import "./index.css";

const PrimaryCard = (props) => {
  const {visuals, imageSource, imageAlt, imageVisuals, children, direction} = props;
  return (
    <div className= "primary-card" style={{display:"flex", flexDirection:`${direction === "true" ? "column" : "row"}`, gap:"5px", ...visuals}}>
     <img src={imageSource} style={{...imageVisuals}} className='primary-image' alt={imageAlt ?? "card image"}/>
     <div className='primary-content'>{children}</div>
    </div>
  )
};

export default PrimaryCard;
