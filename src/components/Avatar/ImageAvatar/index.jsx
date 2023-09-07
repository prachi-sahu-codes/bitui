import React from 'react'
import "./index.css";

const ImageAvatar = (props) => {
  const {avatarSource, avatarAlt, dimension} = props;
  return (
    <div>
     <img className='image-avatar' src={avatarSource} alt={avatarAlt} width={dimension} height={dimension}/>
    </div>
  )
};

export default ImageAvatar;
