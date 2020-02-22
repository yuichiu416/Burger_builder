import React from 'react';
import Logo from '../../Logo/Logo';
import './Toobar.css';

const toolbar = props => (
    <header className="Toolbar">
        <div>MENU</div>
        <Logo/>
        <nav>
            ...links
        </nav>
    </header>
);

export default toolbar;