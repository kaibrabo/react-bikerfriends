import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    // Header Component won't update
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log("Header");
        return <h1 className="header-title">Robot Friends</h1>;
    }
}

export default Header;
