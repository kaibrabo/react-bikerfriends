import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./app.css";

class App extends Component {
    constructor() {
        super(); // required for state
        this.state = {
            friends: [],
            searchfield: ""
        };
    }

    componentDidMount() {
        // fetch users data, then creates users; fetch is a method on the window obj.
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()) // converts response to json
            .then(users => this.setState({ friends: users }));
    }

    onSearchChange = event => {
        // trigger & collects text input
        this.setState({ searchfield: event.target.value });
    };

    render() {
        // destructure this.state obj.
        const { friends, searchfield } = this.state;
        // filter friends result while typing
        const filteredFriends = friends.filter(friend => {
            return friend.name
                .toLowerCase()
                .includes(searchfield.toLowerCase());
        });

        // ternary
        return !friends.length ? (
            // render loading view
            <h1 className="tc header-title">LOADING...</h1>
        ) : (
            // render app view
            <div className="tc">
                <h1 className="header-title">Biker Friends</h1>
                
                <SearchBox searchChange={this.onSearchChange} />

                <Scroll>
                    <ErrorBoundary>                    
                        <CardList friends={filteredFriends} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
