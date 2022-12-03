import React from 'react';
import ReactDOM from 'react-dom';


//CONTROLS THE PORTION OF THE SIDEDRAWER USED TO EXIT OUT OF SIDEDRAWER AFTER A NEW NAVLINK HAS BEEN SELECTED
export const Backdrop = props => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};


