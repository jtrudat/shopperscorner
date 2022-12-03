import React, { useState } from 'react'
import { MainHeader } from './MainHeader'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { SideDrawer } from './SideDrawer'
import { Backdrop } from '../uielements/Backdrop'


//HELPS DETERMINE HOW THE NAVLINKS ARE DISPLAY. ON LARGE SCREENS THE NAVLINKS ARE DISPLAYED WITHIN THE MAINHEADER.
//ON SMALL SCREENS THE NAVLINKS ARE DISPLAYED WITHIN SIDEDRAWER COMPONENT. 
//ALSO -IN ORDER TO HAVE TWO REACT COMPONENTS DISPLAYED IN THE ROOT OF THE RETURN THEY MUST BE WRAPPED IN A REACT FRAGMENT
//SIDE DRAWER IS STATE CONTROLLER
export const MainNavigation = (props)=>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = ()=>{
        setDrawerIsOpen(true)
    }

    const closedDrawer = ()=>{
        setDrawerIsOpen(false)
    }

    return (
        <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closedDrawer}/>}    
        <SideDrawer show={drawerIsOpen} onClick={closedDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
       
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Muse & Peruse</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
        </React.Fragment>
        
    );
}