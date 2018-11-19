import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll';

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
        // filter friends result while typing
        const filteredFriends = this.state.friends.filter(friends => {
            return friends.name
                .toLowerCase()
                .includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.friends.length === 0) {
            return <h1 className='tc header-title'>LOADING...</h1>
        } else {
            // render view
            return (
                <div className="tc">
                    <h1 className="header-title">Biker Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList friends={filteredFriends} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;
