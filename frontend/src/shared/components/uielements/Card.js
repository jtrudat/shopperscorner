import React from 'react';


//USED FOR HOUSING THE DISPLAY OF EACH USER AND LIST OF TOPICS
export const Card = props => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};


