import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;