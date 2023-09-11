import React from 'react'
import "./index.css";

const LetterAvatar = (props) => {
  const { avatarText, avatarBg="#00b4d8", textColor = "#fff", dimension= 80} = props;
  const letter = avatarText?.slice(0, 2).toUpperCase() ?? "AB";

  return (
    <div>
     <div className={`letter-avatar`} style={{
        width: `${dimension}px`,
        height: `${dimension}px`,
        backgroundColor: avatarBg,
        color:textColor,
        fontSize: `${dimension * 0.5}px`,
      }}>{letter}</div>
    </div>
  )
}; 

export default LetterAvatar;