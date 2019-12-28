import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";
import { setSearchField, requestFriends } from "../actions";
import "./app.css";

const mapStateToProps = state => {
    const {searchFriends, requestFriends} = state;
    return {
        searchField: searchFriends.searchField,
        friends: requestFriends.friends,
        isPending: requestFriends.isPending,
        error: requestFriends.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestFriends: () => dispatch(requestFriends())
    };
};

class App extends Component {
    componentDidMount() {
        this.props.onRequestFriends();
    }

    render() {
        const { searchField, onSearchChange, friends, isPending } = this.props;
        // filter friends result while typing
        const filteredFriends = friends.filter(friend => {
            // compares each typed letter to the friends names
            return friend.name
                .toLowerCase()
                .includes(searchField.toLowerCase());   
        });

        // ternary
        return isPending ? (
            // render loading view
            <h1 className="tc header-title">LOADING...</h1>
        ) : (
            // render app view
            <main className="tc">
                <Header />

                <SearchBox searchChange={onSearchChange} />

                <Scroll>
                    <ErrorBoundary>
                        <CardList friends={filteredFriends} />
                    </ErrorBoundary>
                </Scroll>
            </main>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
