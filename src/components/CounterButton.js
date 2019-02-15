import React, { Component } from "react";
// import "./CounterButton.css";

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // CounterButton Component will update
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) { 
            return true
        }
        return false
    }

    updateCount = () => {
        // Allows synchronous updating
        // By setting state to variable 'num'
        let num = this.state.count;
        this.setState({count: num += 1});
    }

    render() {
        console.log("CounterButton");
        return (
            <button color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;
