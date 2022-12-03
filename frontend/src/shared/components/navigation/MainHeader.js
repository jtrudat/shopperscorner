import React from 'react'

//A PORTION OF THE MAIN HEADER DISPLAY. MAINNAVIGATION CONTAINS THE MAINHEADER WHICH CONTAINS THE NAVLINKS
export const MainHeader = (props)=>{
    return (
        <header className="main-header">
            {props.children}
        </header>
    )
}