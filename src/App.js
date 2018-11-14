import React, { Component } from 'react';
import CardList from './CardList';
import { friends } from './friends';
import SearchBox from './SearchBox';


class App extends Component {
    
    constructor() {
        super()
        this.state = {
            friends: friends,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

        console.log(event.target.value)
    }

    render() {
        const filteredFriends = this.state.friends.filter(
            friends => {
                return friends.name.toLowerCase().includes(
                    this.state.searchfield.toLowerCase()
                );
            }
        )

        return (
            <div className='tc'>
                <h1>Biker Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList friends={filteredFriends} />
            </div>
        );
    }

}

export default App;
