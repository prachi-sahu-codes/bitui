import React from 'react';
import "./index.css";

const PrimaryCard = (props) => {
  const {visuals, imageSource, imageAlt, imageVisuals, children, direction} = props;
  return (
    <div className= "primary-card" style={{...visuals, display:"flex", flexDirection:`${direction ? "column" : "row"}`, gap:"5px"}}>
     <img src={imageSource} style={{...imageVisuals}} className='primary-image' alt={imageAlt ?? "card image"}/>
     <div className='primary-content' style={{}}>{children}</div>
    </div>
  )
};

export default PrimaryCard;
