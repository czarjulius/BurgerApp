import React from 'react';
import Auxx from '../../hoc/Auxx';
import './Layout.css';

const Layout = ( props ) => (
    <Auxx>
        <div>Toolbar,Sidebar,Backdrops</div>
        <main className="Content">
            {props.children}
        </main>
    </Auxx>

);
export default Layout;