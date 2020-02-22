import React from 'react'
import LOGO from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = props => (
    <div className="Logo">
        <img src={LOGO} alt="MyBurger"/>
    </div>
);

export default logo;