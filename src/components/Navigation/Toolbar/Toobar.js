import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toobar.css';

const toolbar = props => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className="ToolbarLogo">
            <Logo height="80%"/>
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;