import React from 'react'
import "./index.css";

const LetterAvatar = (props) => {
  const { avatarText, avatarBg, dimension} = props;
  const letter = avatarText?.slice(0, 2).toUpperCase() ?? "AB";

  return (
    <div>
     <div className={`letter-avatar`} style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: avatarBg,
        fontSize: `${dimension * 0.5}px`,
      }}>{letter}</div>
    </div>
  )
}; 

export default LetterAvatar;