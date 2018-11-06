import React from 'react';
import CardList from './CardList';
import { friends } from './friends';
import SearchBox from './SearchBox';

const App = () => {
    return (
        <div className='tc'>
            <h1>Biker Friends</h1>
            <SearchBox />
            <CardList friends={friends} />
        </div>
    );
}

export default App;
