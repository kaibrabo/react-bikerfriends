import React, { Component } from "react";
import CounterButton from './CounterButton';
import "./Header.css";

class Header extends Component {
    // Header Component won't update
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log("Header");
        return (
            <div className="header">
                <h1 className="header-title">Robot Friends</h1>
                <CounterButton color={'white'}/>
            </div>
        );
            
    }
}

export default Header;
