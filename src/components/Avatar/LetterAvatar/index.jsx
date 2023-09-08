import React from 'react'
import "./index.css";

const LetterAvatar = (props) => {
  const { avatarText,  visuals, options} = props;
  const letter = avatarText?.slice(0, 2).toUpperCase() ?? "AB";

  return (
    <div>
     <div className={`letter-avatar ${options}`} style={{...visuals}}>{letter}</div>
    </div>
  )
};

export default LetterAvatar;