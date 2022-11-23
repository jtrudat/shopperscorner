import React, { useState } from 'react'
import { MainHeader } from './MainHeader'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'
import { SideDrawer } from './SideDrawer'

export const MainNavigation = (props)=>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    return (
        <React.Fragment>
        {drawerIsOpen ? (
        <SideDrawer>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        ) : null}
        <MainHeader>
            <button className="main-navigation__menu-btn">
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