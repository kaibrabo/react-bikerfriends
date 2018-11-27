import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import { setSearchField } from "../actions";
import "./app.css";

const mapStateToProps = state => {
    return {
        searchField: state.searchFriends.searchField
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value))
    };
};

class App extends Component {
    constructor() {
        super(); // required for state
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        // fetch users data, then creates users; fetch is a method on the window obj.
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json()) // converts response to json
            .then(users => this.setState({ friends: users }));
    }

    render() {
        // destructure this.state obj.
        const { friends } = this.state;
        const { searchField, onSearchChange } = this.props;
        // filter friends result while typing
        const filteredFriends = friends.filter(friend => {
            return friend.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });

        // ternary
        return !friends.length ? (
            // render loading view
            <h1 className="tc header-title">LOADING...</h1>
        ) : (
            // render app view
            <div className="tc">
                <h1 className="header-title">Biker Friends</h1>

                <SearchBox searchChange={onSearchChange} />

                <Scroll>
                    <ErrorBoundary>
                        <CardList friends={filteredFriends} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
