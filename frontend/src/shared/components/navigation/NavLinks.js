import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavLinks = (props)=>{
    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All USERS</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">MY TOPICS</NavLink>
            </li>
            <li>
                <NavLink to="/places/new">ADD A TOPIC</NavLink>
            </li>
            <li>
                <NavLink to="/auth">AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}