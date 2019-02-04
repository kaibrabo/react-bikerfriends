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
    return {
        searchField: state.searchFriends.searchField,
        friends: state.requestFriends.friends,
        isPending: state.requestFriends.isPending,
        error: state.requestFriends.error
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
            <div className="tc">
                <Header />

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
