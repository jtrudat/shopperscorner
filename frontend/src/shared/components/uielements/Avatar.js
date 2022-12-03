import React from 'react';

//CONTROLS ORIENTATION AND STRUCTURING OF THE USERS PERSONAL PICTURE
const Avatar = props => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
