import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthorizeContext } from '../../context/AuthorizeContext'
import { useHistory } from 'react-router-dom'

export const NavLinks = (props)=>{
    const authority = useContext(AuthorizeContext)
    const history = useHistory()

    const handlerLogout =()=>{
        history.push('/')
        authority.logout()
    }

    return(
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>All USERS</NavLink>
            </li>
            {authority.isLoggedIn && (
            <li>
                <NavLink to="/user/topics">MY TOPICS</NavLink>
            </li>)}
            {authority.isLoggedIn && (
            <li>
                <NavLink to="/topics/new">ADD A TOPIC</NavLink>
            </li>)}
            {!authority.isLoggedIn && (
            <li>
                <NavLink to="/authorize">🔐ACCESS🔐</NavLink>
            </li>)}
            {authority.isLoggedIn && (
                <li>
                <button onClick={handlerLogout}>EXIT</button>
            </li>
            )}
            🔜
        </ul>
    )
}