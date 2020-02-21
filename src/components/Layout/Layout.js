import React from 'react';
import Aux from '../../hoc/Auxiliary';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div> Toolbar, SideFrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;