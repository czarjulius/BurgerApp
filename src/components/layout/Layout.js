import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false})
    };

    render() {
        return (
            <Auxx>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxx>

        )
    }
};
export default Layout;