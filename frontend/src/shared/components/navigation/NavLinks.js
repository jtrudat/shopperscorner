import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinks = (props)=>{
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All USERS</NavLink>
            </li>
            <li>
                <NavLink to="/u1/topics">MY TOPICS</NavLink>
            </li>
            <li>
                <NavLink to="/topics/new">ADD A TOPIC</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}