import React from 'react';
import "./index.css";

const ResponsiveImage = (props) => {
  const {imageSource, imageAlt, visuals} = props;
  return (
    <div>
      <img className='img-responsive' src={imageSource} style={{...visuals}} alt={imageAlt ?? "responsive image"}/>
    </div>
  )
};

export default ResponsiveImage;
