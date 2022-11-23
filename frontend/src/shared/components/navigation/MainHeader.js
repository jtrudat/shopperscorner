import React from 'react'

export const MainHeader = (props)=>{
    return (
        <header className="main-header">
            {props.children}
        </header>
    )
}