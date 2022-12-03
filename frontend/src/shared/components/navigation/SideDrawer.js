import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

//THIS COMPONENT USES CSS TO HELP ANIMATE THE ENTRY AND EXIT OF THE NAVLINKS WITHIN THE SIDEDRAWER VIEWER
export const SideDrawer = (props)=>{
    const content = <CSSTransition in={props.show} timeout={1000} classNames="slide-in-left" mountOnEnter unmountOnExit>
        <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    return (
        ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
    )
}