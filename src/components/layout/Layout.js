import React from 'react';
import Auxx from '../../hoc/Auxx';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ( props ) => (
    <Auxx>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Auxx>

);
export default Layout;