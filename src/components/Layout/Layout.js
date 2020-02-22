import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toobar';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;