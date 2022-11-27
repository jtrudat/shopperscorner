import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthorizeContext } from '../../context/AuthorizeContext'

export const NavLinks = (props)=>{
    const authority = useContext(AuthorizeContext)

    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All USERS</NavLink>
            </li>
            {authority.isLoggedIn && (
            <li>
                <NavLink to="/u1/topics">MY TOPICS</NavLink>
            </li>)}
            {authority.isLoggedIn && (
            <li>
                <NavLink to="/topics/new">ADD A TOPIC</NavLink>
            </li>)}
            {!authority.isLoggedIn && (
            <li>
                <NavLink to="/authorize">🔐ACCESS🔐</NavLink>
            </li>)}
        </ul>
    )
}