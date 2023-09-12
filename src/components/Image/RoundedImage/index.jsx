import React from 'react';
import "./index.css";

const RoundedImage = (props) => {
  const {imageSource, imageAlt, dimension, visuals} = props;
  return (
    <div>
     <img className='img-rounded' width={dimension} height={dimension} src={imageSource} style={{...visuals}} alt={imageAlt ?? "responsive image"}/>
    </div>
  )
};

export default RoundedImage;
