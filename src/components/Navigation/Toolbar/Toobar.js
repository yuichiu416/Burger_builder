import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toobar.css';

const toolbar = props => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo/>
        
        <NavigationItems/>
    </header>
);

export default toolbar;